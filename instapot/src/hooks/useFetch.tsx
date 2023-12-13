import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import { TFlow } from "../types/tflow";
import { TUsername } from "../types/tusername";
import { TSingleImage } from "../types/tsingleimage";

const baseUrl = process.env.REACT_APP_API_URL;

// Fetch Liked Images
const fetchLikedImages = async (id: number) => {
  let endPointUrl = `${baseUrl}/Image/Image/Liked?id=${id}`;

  const response = await axios.get<TSingleImage[]>(`${endPointUrl}`);

  return response.data;
};

export const useFetchLikedImages = (id: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ["ipFetchLikedImages"],
    queryFn: () => fetchLikedImages(id),
  });

  return { data, isLoading };
};

// Fetch Singel Image
const fetchAllImages = async () => {
  let endPointUrl = `${baseUrl}/Image/Image/`;

  const response = await axios.get<TSingleImage[]>(`${endPointUrl}`);

  return response.data;
};

export const useFetchAllImages = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["ipFetchAllImages"],
    queryFn: () => fetchAllImages(),
  });

  return { data, isLoading };
};

// Fetch Singel Image
const fetchSingleImage = async (imageId: any) => {
  let endPointUrl = `${baseUrl}/Image/Image/${imageId}`;

  const response = await axios.get<TSingleImage>(`${endPointUrl}`);

  return response.data;
};

export const useFetchSingleImage = (imageId: any) => {
  const { data, isLoading } = useQuery({
    queryKey: ["ipFetchSingleImage"],
    queryFn: () => fetchSingleImage(imageId),
  });

  return { data, isLoading };
};

// Fetch Flow Images (not Loggedin userid images)
const fetchFlowImagesFromProfile = async (profileId: any) => {
  let endPointUrl = `${baseUrl}/Image/ImageFlowForUser/${profileId}`;

  const response = await axios.get<TFlow[]>(`${endPointUrl}`);

  return response.data;
};

export const useFetchFlowImages = (profileId: any) => {
  const { data, isLoading } = useQuery({
    queryKey: ["ipFetchFlowImages"],
    queryFn: () => fetchFlowImagesFromProfile(profileId),
  });

  return { data, isLoading };
};

// Fetch username
const fetchUserName = async (profileId: any) => {
  let endPointUrl = `${baseUrl}/Profile/ProfileName/${profileId}`;

  const response = await axios.get<TUsername>(`${endPointUrl}`);

  return response.data;
};

export const useFetchUsername = (userid: any) => {
  const { data, isLoading } = useQuery({
    queryKey: ["ipFetchUserName"],
    queryFn: () => fetchUserName(userid),
  });

  return { data, isLoading };
};
