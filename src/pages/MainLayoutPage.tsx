import React, { useCallback, useContext, useState } from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router";
import { Context, defaultValue } from "../context";
import { CustomDrawer } from "../components/snippets";

const MainLayoutPage = () => {
  
  const [ openDrawer, setOpenDrawer ] = useState(false)
  const onClose = useCallback(()=>{
    setOpenDrawer(false)
  },[])
  const onOpen = useCallback(()=>{
    setOpenDrawer(true)
  },[])

  return (
    <>
      <Header onOpen={onOpen} />
      <Outlet />
      <CustomDrawer open={openDrawer} onClose={onClose}/>
    </>
  );
};

export  {MainLayoutPage};
