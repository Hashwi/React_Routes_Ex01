import React from "react";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import PageContent from "./PageContent";

export default function Error() {

  const error = useRouteError()

  let title = 'An Error Occurred!';
  let message = 'Something Went Wrong!!!'

  if (error.status === 500){
    message = error.data.message;
  }

  if (error.status === 404){
    title = "Not Found!"
    message = 'Could Not Find Resource Or Page!!';
  }

  return (
    <>
      <MainNavigation />
      <PageContent title = {title} >
        <p> {message}</p>
        </PageContent>
    </>
  );
}
