import React from "react";

// import MainNavigation from "../components/MainNavigation";
import PageContent from "./PageContent";

export default function Error() {
  return (
    <>
      {/* <MainNavigation /> */}
      <PageContent title = 'An Error Occurred!' >
        <p> Something Went Wrong!!!</p>
        </PageContent>
    </>
  );
}
