

export const getMembers = async (sendRequest, role) => {
  const res = await sendRequest(`personnel/get_members_identity/${role}`);
  const data = await res.json();
  return res.ok ? data.members : [];
};
