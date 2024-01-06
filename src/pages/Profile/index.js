import React, { useState, useEffect } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import { FaRegCirclePause } from "react-icons/fa6";
import { FaPlayCircle } from "react-icons/fa";
import {
  Container,
  Select,
  InnerContainer,
  DigitalClock,
  RightSection,
  BackButton,
  PauseButton,
  DateWrapper,
  Time,
  BackText,
  SelectWrapper,
  Wrapper,
  TopSection,
  MidSection,
  DetailWrapper,
  NameWrapper,
  ContactWrapper,
  NameText,
  Username,
  CatchPhrase,
  Label,
  BottomSection,
  Card,
  ClockWrapper,
  Title,
  PostTitle,
  Body,
  SectionTitle,
} from "../../styles/userProfile";
import { Modal } from "../../modal";
import useGet from "../../hooks/useGet";
import Loader from "../../component/loader";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [userPosts, setUserPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState();
  const [countryList, setCountryList] = useState([]);
  const [date, setDate] = useState();
  const [clockRunning, setClockRunning] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryTime, setCountryTime] = useState("");
  const [digitalTime, setDigitalTime] = useState("");
  const [utcOffset, setUtcOffset] = useState("");
  const navigate = useNavigate();
  const { userId } = useParams();
  const [showModal, setShowModal] = useState(false);

  // getting user Data
  const {
    data,
    refetch: fetchUserData,
    isLoading,
  } = useGet(
    `get user ${userId}`,
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  // getting user's posts
  const {
    data: postData,
    refetch: fetchUserPosts,
    isLoading: postLoading,
  } = useGet(
    `Get user's Post ${userId}`,
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  // getting country list
  const {
    data: countryData,
    refetch: fetchCountryList,
    isLoading: contryListLoading,
  } = useGet("Get cuntrylist", "http://worldtimeapi.org/api/timezone");

  // getting time of selected country
  const {
    data: timeData,
    refetch: fetchCountryTime,
    isLoading: contryTimeLoading,
  } = useGet(
    `Get time${selectedCountry}`,
    `https://worldtimeapi.org/api/timezone/${selectedCountry}`
  );

  useEffect(() => {
    if (data) setUserData(data);
  }, [data]);

  useEffect(() => {
    if (postData) setUserPosts(postData);
  }, [postData]);

  useEffect(() => {
    if (countryData) {
      setCountryList(countryData);
      setSelectedCountry(countryData[0]);
    }
  }, [countryData]);

  useEffect(() => {
    if (timeData) {
      setCountryTime(timeData?.unixtime * 1000);
      setUtcOffset(timeData?.utc_offset);
    }
  }, [timeData]);

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // convert time to digital time
  const convertToDigitalTime = (utcDatetime) => {
    const utcMoment = moment.utc(utcDatetime);
    const localMoment = utcMoment.utcOffset(utcOffset);

    // Format the local time as HH:MM:SS
    const formattedTime = localMoment?.format("HH:mm:ss");

    // Format the local date as YYYY-MM-DD
    const formattedDate = localMoment?.format("YYYY-MM-DD");
    setDate(formattedDate);

    return formattedTime;
  };

  // updating time on every second
  useEffect(() => {
    const interval = setInterval(() => {
      if (clockRunning && countryTime) {
        setDigitalTime(convertToDigitalTime(new Date(countryTime + 1000)));
        setCountryTime((prevTime) => prevTime + 1000);
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup on component unmount
    // eslint-disable-next-line
  }, [selectedCountry, countryTime, clockRunning]);

  // fetch country time when country is selected
  useEffect(() => {
    if (selectedCountry) fetchCountryTime();
    // eslint-disable-next-line
  }, [selectedCountry]);

  // fetch userData and its posts when userId available
  useEffect(() => {
    if (userId) {
      fetchUserData();
      fetchUserPosts();
    }
  }, [userId]);

  // fetch country list
  useEffect(() => {
    fetchCountryList();
  }, []);

  const handlePauseResume = () => {
    setClockRunning((prevRunning) => !prevRunning);
  };

  const onBack = () => {
    navigate(-1);
  };

  if (contryTimeLoading || isLoading || postLoading || contryListLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <InnerContainer>
        <TopSection>
          <BackButton onClick={onBack}>
            <IoIosArrowRoundBack size={20} color="black" />
            <BackText>Back</BackText>
          </BackButton>
          <RightSection>
            <SelectWrapper>
              Country :
              <Select onChange={(e) => setSelectedCountry(e.target.value)}>
                {countryList.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </Select>
            </SelectWrapper>

            <DigitalClock>
              {digitalTime && (
                <ClockWrapper>
                  <Wrapper>
                    <DateWrapper>{date}</DateWrapper>
                    <Time>{digitalTime}</Time>
                  </Wrapper>
                  <PauseButton onClick={handlePauseResume}>
                    {clockRunning ? (
                      <FaRegCirclePause color="black" size={20} />
                    ) : (
                      <FaPlayCircle color="black" size={20} />
                    )}
                  </PauseButton>
                </ClockWrapper>
              )}
            </DigitalClock>
          </RightSection>
        </TopSection>
        <MidSection>
          <SectionTitle>User Detail</SectionTitle>
          <DetailWrapper>
            <NameWrapper>
              <NameText>
                <Label>Name:</Label> {userData?.name}
              </NameText>
              <Username>
                <Label>UserName : </Label> {userData?.username}
              </Username>
              <CatchPhrase>
                <Label> CatchPhrase : </Label>
                {userData?.company?.catchPhrase}
              </CatchPhrase>
            </NameWrapper>
            <ContactWrapper>
              <div>
                <Label>Address : </Label>
                {userData?.address?.street} | {userData?.address?.suite} | (
                {userData?.address?.city}) | zip - {userData?.address?.zipcode}
              </div>
              {userData?.phone && (
                <div>
                  <Label>Phone</Label> : {userData?.phone}
                </div>
              )}
              {userData?.email && (
                <div>
                  <Label> Mail</Label> : {userData?.email}
                </div>
              )}
            </ContactWrapper>
          </DetailWrapper>
        </MidSection>
        <BottomSection>
          <SectionTitle>User Posts</SectionTitle>

          {userPosts?.map((post) => (
            <Card key={post.id} onClick={() => handlePostClick(post)}>
              <PostTitle> {post.title}</PostTitle>
              <Body>{post?.body}</Body>
            </Card>
          ))}
        </BottomSection>
        {showModal && (
          <Modal onClose={handleCloseModal} content={selectedPost} />
        )}
      </InnerContainer>
    </Container>
  );
};

export default Profile;
