// Import necessary libraries
import React, { useState, useEffect } from "react";
import {
  Card,
  Container,
  PageTitle,
  UserWrapper,
} from "../../styles/Directory";
import { useNavigate } from "react-router-dom";
import useGet from "../../hooks/useGet";
import Loader from "../../component/loader";

const Directory = () => {
  const [userList, setUserList] = useState([]);
  const navigate = useNavigate();

  // get users list
  const {
    data,
    refetch: fetchUserList,
    isLoading,
    isError,
  } = useGet("Get Users", "https://jsonplaceholder.typicode.com/users");

  // get All posts
  const {
    data: posts,
    refetch: fetchPosts,
    isLoading: postLoading,
    isError: postError,
  } = useGet("get Posts", "https://jsonplaceholder.typicode.com/posts");

  useEffect(() => {
    fetchUserList();
    fetchPosts();
  }, []);

  useEffect(() => {
    if (data) setUserList(data);

    if (data && posts) {
      const updatedUserList = data.map((user) => {
        const userPosts = posts.filter((post) => post.userId === user.id);
        return { ...user, posts: userPosts };
      });
      setUserList(updatedUserList);
    }
  }, [data, posts]);

  const handleUserClick = (userId) => {
    navigate(`userDetails/${userId}`);
  };

  if (isLoading || postLoading) {
    return <Loader />;
  }

  if (isError || postError) {
    return <div>Sonthing went wrong</div>;
  }
  return (
    <Container>
      <PageTitle>Users Directory</PageTitle>

      <UserWrapper>
        {userList?.map((user) => (
          <Card key={user.id} onClick={() => handleUserClick(user.id)}>
            <div>
              <span>{user.name}</span>
            </div>
            <p>Total Posts: {user?.posts?.length}</p>
          </Card>
        ))}
      </UserWrapper>
    </Container>
  );
};

export default Directory;
