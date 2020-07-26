import styled from "styled-components";
export const UserImg = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;
`;
export const UserInfo = styled.div`
  text-align: center;
  padding: 20px;
`;
export const UserInfoDashboard = styled.div`
  width: 15%;
  @media (min-width: 1440px) {
    width: 18%;
  }
  @media (min-width: 1024px) {
    width: 12%;
  }
  @media (min-width: 425px) {
    width: 32%;
  }
`;

export const Border = styled.div`
  border-bottom: 7px double #f5f7fa;
`;

export const Explore = styled.div`
  padding: 20px;
  @media (min-width: 768px) {
    padding:9px
  }
  @media (min-width: 425px) {
    padding:11px
  }
`;
export const ExploreDiv = styled.div`
  display: flex;
  padding: 10px;
`;
export const Upgrade = styled.div`
  background-color: #f5f7fa;
  text-align: center;
  padding: 15px;
  margin: 10px;
`;

export const UpgradeImg = styled.img`
  width: 50px;
  height: 50px;
  margin:10px;
`;

export const UpgradeButton = styled.button`
  color: white;
  background-color: #0000cd;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  padding: 7px 11px;
  margin: 5px;
  @media (min-width: 768px) {
    padding: 4px 9px;
     margin: 0px;
  }
`;
