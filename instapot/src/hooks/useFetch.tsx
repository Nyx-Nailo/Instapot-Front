import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import { TFlow } from "../types/tflow";
import { TUsername } from "../types/tusername";

const baseUrl = process.env.REACT_APP_API_URL;

// Fetch Flow Images (not Loggedin userid images)
const fetchFlowImagesFromProfile = async (profileId: number) => {
  let endPointUrl = `${baseUrl}/Image/ImageFlowForUser/${profileId}`;

  const response = await axios.get<TFlow[]>(`${endPointUrl}`);

  return response.data;
};

export const useFetchFlowImages = (profileId: number) => {
  const { data } = useQuery({
    queryKey: ["ipFetchFlowImages"],
    queryFn: () => fetchFlowImagesFromProfile(profileId),
  });

  return { data };
};

// Fetch username
const fetchUserName = async (profileId: number) => {
  let endPointUrl = `${baseUrl}/Profile/ProfileName/${profileId}`;

  const response = await axios.get<TUsername>(`${endPointUrl}`);

  return response.data;
};

export const useFetchUsername = (userid: number) => {
  const { data } = useQuery({
    queryKey: ["ipFetchUserName"],
    queryFn: () => fetchUserName(userid),
  });

  return { data };
};
