import { useMemo } from "react";
import { Box, Divider, Stack } from "@mui/material";
import type { ChapterConfig, Group, Role } from "../../types/chapter";
import GroupRoles from "./GroupRoles";

type ChapterRolesProps = {
  data: ChapterConfig;
  columnsWhenFull?: 1 | 2;
};

function roleWeight(role: Role): number {
  const membersCount = role.members?.length ?? 0;
  return (role.name ? 1 : 0) + Math.max(1, membersCount);
}

function groupWeight(group: Group): number {
  return 1 + (group.roles ?? []).reduce((acc, r) => acc + roleWeight(r), 0);
}

function splitBalanced(groups: Group[]) {
  const sorted = [...groups].sort((a, b) => groupWeight(b) - groupWeight(a));

  const left: Group[] = [];
  const right: Group[] = [];
  let leftW = 0;
  let rightW = 0;

  for (const g of sorted) {
    const w = groupWeight(g);
    if (leftW <= rightW) {
      left.push(g);
      leftW += w;
    } else {
      right.push(g);
      rightW += w;
    }
  }

  return { left, right };
}

function Column({ groups }: Readonly<{ groups: Group[] }>) {
  return (
    <Stack spacing={4}>
      {groups.map((g, idx) => (
        <>
          <GroupRoles key={g.name} group={g} showGroupName />
          <Divider
            sx={{
              display: {
                xs: "block",
                md: idx < groups.length - 1 ? "block" : "none",
              },
            }}
          />
        </>
      ))}
    </Stack>
  );
}

export default function ChapterRoles({
  data,
  columnsWhenFull = 2,
}: Readonly<ChapterRolesProps>) {
  const groups = data.chapter ?? [];

  const { left, right } = useMemo(() => splitBalanced(groups), [groups]);

  const isTwoCols = columnsWhenFull === 2;

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: isTwoCols ? "1fr 1fr" : "1fr" },
        gap: 4,
        alignItems: "start",
      }}
    >
      <Column groups={left} />
      {isTwoCols && <Column groups={right} />}
    </Box>
  );
}
