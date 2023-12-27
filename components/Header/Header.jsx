"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";
import { UserOutlined } from "@ant-design/icons";
import React from "react";
import { Avatar, Space } from "antd";
export default function Header() {
  return (
    <div className={`${styles.header} sticky inset-x-0 top-0`}>
      <div className={styles["nav-bar"]}>
        <div className={styles.logo}>
          <Image src="/svg/logo/logo.svg" width={34} height={34} alt="logo" />
          <Image
            src="/svg/logo/logo-name.svg"
            width={196}
            height={12}
            alt="logo-name"
          />
        </div>
        <div className={styles.container}>
          <ul className={styles["buttons-container"]}>
            <li>
              <Link href="/dashboard/home">Home</Link>
            </li>
            <li>
              <Link href="/dashboard/about">About</Link>
            </li>
            <li>
              <Link href="/dashboard/food">Food</Link>
            </li>

            <li>
              <Link href={"/user/generator"}>Generator</Link>
            </li>
          </ul>
          <Avatar
            className={styles["session-btn"]}
            size={50}
            icon={<UserOutlined />}
            src={"/images/avatar.png"}
          />
        </div>
      </div>
    </div>
  );
}
