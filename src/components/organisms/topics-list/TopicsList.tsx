import React, { MouseEvent, useEffect, useState } from "react";
import {
  iAtlassianResponse,
  iAtlassianResponses,
} from "../../../models/Atlassian";
import styled from "styled-components";
import { getPrependedChar } from "./utils";

const ListWrapper = styled.ul`
  list-style: none;

  p {
    display: flex;
    padding: 1em;
    border-radius: 10px;
    white-space: nowrap;
  }

  p:hover {
    background: #efefefef;
    cursor: pointer;
  }

  span {
    display: block;
    width: 20px;
  }
`;

interface iTopicsList {
  topics: iAtlassianResponses;
}

const TopicsList = ({ topics }: iTopicsList) => {
  const [collapsedArray, setCollapsedArray] = useState<boolean[]>([]);

  const handleClick = (e: MouseEvent<HTMLParagraphElement>, index: number) => {
    e.stopPropagation();
    let arr = [...collapsedArray];
    arr[index] = !collapsedArray[index];
    setCollapsedArray(arr);
  };

  useEffect(() => {
    const arr = new Array(topics.length).fill(true);
    setCollapsedArray(arr);
  }, [topics]);

  return (
    <ListWrapper>
      {topics.map((item: iAtlassianResponse, index) => {
        const collapsed = collapsedArray[index];

        return (
          <li key={item.id}>
            <p
              onClick={(e) => {
                handleClick(e, index);
              }}
            >
              <span>{getPrependedChar(item, collapsed)}</span> {item.name}
            </p>
            {collapsed !== undefined && !collapsed && item.children && (
              <TopicsList topics={item.children} />
            )}
          </li>
        );
      })}
    </ListWrapper>
  );
};

export default TopicsList;
