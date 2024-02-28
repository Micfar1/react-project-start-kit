import React, { MouseEvent, useEffect, useState } from "react";
import { iNestedName, iNestedNames } from "../../../models/NestedNames";
import styled from "styled-components";
import { getNameStr } from "./utils";

const ListWrapper = styled.ul`
  list-style: none;

  p {
    padding: 1em;
    border-radius: 10px;
    white-space: nowrap;
  }

  p:hover {
    background: #efefefef;
    cursor: pointer;
  }
`;

interface iNamesList {
  names: iNestedNames;
}

const NamesList = ({ names }: iNamesList) => {
  const [collapsedArray, setCollapsedArray] = useState<boolean[]>([]);

  const handleClick = (e: MouseEvent<HTMLParagraphElement>, index: number) => {
    e.stopPropagation();
    let arr = [...collapsedArray];
    arr[index] = !collapsedArray[index];
    setCollapsedArray(arr);
  };

  useEffect(() => {
    if (names.length > 0) {
      const arr = new Array(names.length).fill(true);
      setCollapsedArray(arr);
    }
  }, [names]);

  return (
    <ListWrapper>
      {names.map((nameItem: iNestedName, index) => {
        let nameStr = getNameStr(nameItem, collapsedArray[index]);

        return (
          <li key={nameItem.id}>
            <p
              onClick={(e) => {
                handleClick(e, index);
              }}
            >
              {nameStr}
            </p>
            {collapsedArray[index] !== undefined &&
              !collapsedArray[index] &&
              nameItem.children && <NamesList names={nameItem.children} />}
          </li>
        );
      })}
    </ListWrapper>
  );
};

export default NamesList;
