import React, { useState, useEffect } from "react";
import {
  Container,
  MobileApp,
  Phone,
  AppDetails,
  Logo,
  StacksRow,
  InBuildBtn,
  ProjectsColumn,
  ProductRow
} from "../../styles/pages/Projects";
import PageTitle from "../../components/PageTitle";
import StacksTag from "../../components/StacksTag";

function projects() {
  return (
    <Container>
      <PageTitle
        title="projects"
        stretchedLetter="r"
        overlayTitle="techs | experiences | skills"
      />

      <ProjectsColumn>
        <MobileApp>
          <div className="main-wrapper">
            <div className="right-side">
              <div className="phone-holder img-left">
                <Phone src="/static/assets/phone_mockup2.png" />
              </div>
            </div>
            <AppDetails>
              <div className="app-title">
                <Logo src="/static/assets/phone-mockup.png" /> <h1>Logzz</h1>
              </div>
              <h2>A primeira plataforma cash on delivery do Brasil!.</h2>
              <h4>
                A praticidade chegou pra quem precisa de segurança e confiança!
              </h4>
              <StacksRow>
                {["html", "php", "css", "sql"].map((item) => {
                  return <StacksTag key={item} title={item} />;
                })}
              </StacksRow>

              <InBuildBtn>🔨 Em construção</InBuildBtn>
            </AppDetails>
          </div>
        </MobileApp>

        <ProductRow>
            <div className="main-wrapper">
              <AppDetails>
                <div className="app-title">
                  <Logo src="/static/assets/phone-mockup.png" /> <h1>Logzz App</h1>
                </div>
                <h2>O aplicativo que conecta clientes e entregadores.</h2>
                <h4>
                  A praticidade chegou pra quem precisa de segurança e confiança!
                </h4>
                <StacksRow>
                  {["html", "php", "css", "sql"].map((item) => {
                    return <StacksTag key={item} title={item} />;
                  })}
                </StacksRow>

                <InBuildBtn>🔨 Em construção</InBuildBtn>
              </AppDetails>
              <div className="right-side">
                <div className="phone-holder">
                  <img className="laptop" src="/static/assets/laptop-mockup.png" />
                </div>
              </div>
            </div>
          </ProductRow>


        <MobileApp>
          <div className="main-wrapper">
            <div className="right-side">
              <div className="phone-holder img-left">
                <Phone src="/static/assets/phone_mockup2.png" />
              </div>
            </div>
            <AppDetails>
              <div className="app-title">
                <Logo src="/static/assets/phone-mockup.png" /> <h1>Logzz</h1>
              </div>
              <h2>A primeira plataforma cash on delivery do Brasil!.</h2>
              <h4>
                A praticidade chegou pra quem precisa de segurança e confiança!
              </h4>
              <StacksRow>
                {["html", "php", "css", "sql"].map((item) => {
                  return <StacksTag key={item} title={item} />;
                })}
              </StacksRow>

              <InBuildBtn>🔨 Em construção</InBuildBtn>
            </AppDetails>
          </div>
        </MobileApp>
      </ProjectsColumn>
    </Container>
  );
}

export default projects;
