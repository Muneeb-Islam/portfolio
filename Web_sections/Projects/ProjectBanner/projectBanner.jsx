import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import * as React from "react";

const ProjectBanner = () => {
  return (
    <section className=" mt-sm-60">
      <div className="hero-section" style={{ minHeight: "auto" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="badge-pill">PROJECTS</div>
              <h1 className="hero-title mt-3">
                Selected work across products, platforms, and systems.
              </h1>
              <p className="mt-3">
                These sample project blocks are structured for a premium
                portfolio presentation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container  mt-3 mb-3">
        <Link href="/">
          <span>Home</span>
        </Link>
        <Icon icon="heroicons:slash"></Icon>
        <span>Projects</span>
      </div>
    </section>
  );
};

export default ProjectBanner;
