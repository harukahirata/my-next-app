type MembersType = {
  id: number;
  name: string;
  unit: number;
  team: string;
  leader: {
    id: number;
    name: string;
    unit: number;
    team: string;
  };
}[];

const members: MembersType = [
  {
    id: 1,
    name: "hirata",
    unit: 1,
    team: "hase",
    leader: {
      id: 1,
      name: "hase",
      unit: 1,
      team: "hase",
    },
  },
  {
    id: 2,
    name: "wada",
    unit: 1,
    team: "hase",
    leader: {
      id: 1,
      name: "hase",
      unit: 1,
      team: "hase",
    },
  },
  {
    id: 3,
    name: "hirayama",
    unit: 1,
    team: "otsubo",
    leader: {
      id: 2,
      name: "otsubo",
      unit: 1,
      team: "otsubo",
    },
  },
];

export function getMemberName(name: string) {
  return members.find((member) => member.name === name);
}
