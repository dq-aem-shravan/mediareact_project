import axiosInstance from "./axiosInstance";

/**
 * ADMIN: Create Wedding Story
 * POST /web/api/v1/admin/wedding/register
 */

export const createWeddingStory = async ({ coupleName, images, status }) => {
  const formData = new FormData();
  formData.append("coupleName", coupleName);
  formData.append("status", status);

  images.forEach((file) => {
    formData.append("images", file);
  });

  const response = await axiosInstance.post(    
    "/admin/wedding/register",
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );

  return response.data;
};

/**
 * PUBLIC: Get wedding story previews all list 
 * GET /public/wedding-stories/previews
 */
export const getWeddingStoryPreviews = async () => {
  const response = await axiosInstance.get(
    "/public/wedding-stories/previews"
  );
  console.log("Wedding Story Previews Response:", response.data);
  return response.data;
};

/**
 * PUBLIC: Get full wedding story by slug
 * GET /public/wedding-stories/{slug}
 */
export const getWeddingStoryBySlug = async (slug) => {
  const response = await axiosInstance.get(
    `/public/wedding-stories/${slug}`
  );
  return response.data;
};
