"use client";
import React, { useState, useEffect } from "react";
import { CustomCommitTree } from "./custom-commit-tree";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import { CommitPage } from "./pages/commit-page";
import { BranchPage } from "./pages/branch-page";

async function addSticky() {
  const stickyNote = await miro.board.createStickyNote({
    content: "Hello, World!",
  });
  await miro.board.viewport.zoomTo(stickyNote);
}

async function getBoard() {
  const board = await miro.board.infor.get();
  console.log(board);
}

async function getItems() {
  const items = await miro.board.selection.get();
  console.log(items);
}

export const HomePage = () => {
  const [value, setValue] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      {isClient && (
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              sx={{
                width: "100%",
              }}
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                label="Commit"
                sx={{
                  width: "50%",
                }}
              />
              <Tab
                label="Branches"
                sx={{
                  width: "50%",
                }}
              />
            </Tabs>
          </Box>
          {value === 0 && <CommitPage />}
          {value === 1 && <BranchPage />}
        </Box>
      )}
    </div>
  );
};
