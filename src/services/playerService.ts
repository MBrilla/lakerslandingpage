

export interface Player {
  id: number;
  name: string;
  number: string;
  position: string;
  height: string;
  weight: string;
  imageUrl: string;
  stats: {
    ppg: string;
    rpg: string;
    apg: string;
  };
}


export const fetchLakersRoster = async (): Promise<Player[]> => {
  // Static roster data for 2023-24 season
  const players: Player[] = [
    {
      id: 1,
      name: "LeBron James",
      number: "23",
      position: "F",
      height: "6'9\"",
      weight: "250 lbs",
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      stats: { ppg: "25.1", rpg: "7.3", apg: "8.3" }
    },
    {
      id: 2,
      name: "Luka Doncic",
      number: "77",
      position: "G",
      height: "6'7\"",
      weight: "230 lbs",
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629029.png",
      stats: { ppg: "31.4", rpg: "8.4", apg: "8.4" }
    },
    {
      id: 3,
      name: "Austin Reaves",
      number: "15",
      position: "G",
      height: "6'5\"",
      weight: "197 lbs",
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1630559.png",
      stats: { ppg: "15.6", rpg: "4.2", apg: "5.1" }
    },
    {
      id: 4,
      name: "Rui Hachimura",
      number: "28",
      position: "F",
      height: "6'8\"",
      weight: "230 lbs",
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629060.png",
      stats: { ppg: "11.8", rpg: "4.8", apg: "1.0" }
    },
    {
      id: 5,
      name: "Jaxson Hayes",
      number: "11",
      position: "C",
      height: "6'11\"",
      weight: "220 lbs",
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629637.png",
      stats: { ppg: "4.2", rpg: "2.7", apg: "0.4" }
    },
    {
      id: 6,
      name: "Bronny James",
      number: "9",
      position: "G",
      height: "6'4\"",
      weight: "190 lbs",
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1642355.png",
      stats: { ppg: "0.0", rpg: "0.0", apg: "0.0" }
    },
    {
      id: 7,
      name: "Trey Jemison III",
      number: "55",
      position: "C",
      height: "7'0\"",
      weight: "250 lbs",
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1641998.png",
      stats: { ppg: "0.0", rpg: "0.0", apg: "0.0" }
    },
    {
      id: 8,
      name: "Maxi Kleber",
      number: "14",
      position: "F",
      height: "6'10\"",
      weight: "240 lbs",
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1628467.png",
      stats: { ppg: "3.5", rpg: "3.4", apg: "1.4" }
    },
    {
      id: 9,
      name: "Dalton Knecht",
      number: "4",
      position: "G",
      height: "6'6\"",
      weight: "205 lbs",
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1642261.png",
      stats: { ppg: "0.0", rpg: "0.0", apg: "0.0" }
    },
    {
      id: 10,
      name: "Christian Koloko",
      number: "10",
      position: "C",
      height: "7'0\"",
      weight: "230 lbs",
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1631132.png",
      stats: { ppg: "3.1", rpg: "2.9", apg: "0.3" }
    },
    {
      id: 11,
      name: "Alex Len",
      number: "27",
      position: "C",
      height: "7'0\"",
      weight: "250 lbs",
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/203458.png",
      stats: { ppg: "2.9", rpg: "2.8", apg: "0.4" }
    },
    {
      id: 12,
      name: "Shake Milton",
      number: "20",
      position: "G",
      height: "6'5\"",
      weight: "205 lbs",
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629003.png",
      stats: { ppg: "4.5", rpg: "1.6", apg: "1.3" }
    },
    {
      id: 13,
      name: "Markieff Morris",
      number: "88",
      position: "F",
      height: "6'9\"",
      weight: "245 lbs",
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/202693.png",
      stats: { ppg: "4.3", rpg: "2.5", apg: "0.8" }
    },
    {
      id: 16,
      name: "Cam Reddish",
      number: "5",
      position: "F",
      height: "6'8\"",
      weight: "218 lbs",
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629629.png",
      stats: { ppg: "9.2", rpg: "2.4", apg: "1.5" }
    },
    {
      id: 17,
      name: "Jarred Vanderbilt",
      number: "2",
      position: "F",
      height: "6'9\"",
      weight: "214 lbs",
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629020.png",
      stats: { ppg: "5.2", rpg: "4.8", apg: "1.2" }
    },
    {
      id: 18,
      name: "Gabe Vincent",
      number: "7",
      position: "G",
      height: "6'3\"",
      weight: "200 lbs",
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629216.png",
      stats: { ppg: "5.4", rpg: "1.2", apg: "3.0" }
    }
  ];

  return players;
};