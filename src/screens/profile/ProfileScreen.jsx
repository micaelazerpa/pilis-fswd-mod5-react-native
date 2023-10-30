import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { UserInfoScreen } from "../user/UserInfoScreen";
import { LoginScreen } from "../login/LoginScreen"; 
import { View } from "react-native";

export const ProfileScreen = () => {
  const { currentUser } = useContext(UserContext);

  return(
    <>
    <View>
      
      {currentUser ? (<UserInfoScreen />) : (<LoginScreen />)} 
    </View>
    </>
  ) 
};