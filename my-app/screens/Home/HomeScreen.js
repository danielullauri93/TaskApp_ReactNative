import { StyleSheet } from "react-native";
import React from "react";

import TaskList from "../../components/TaskList";
import Layout from "../../components/Layout";

const HomeScreen = () => {
  return (
    <Layout>
      <TaskList />
    </Layout>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
