import { Flex, Spin } from "antd";

const Spinner = () => {
  return (
    <Flex align="center" gap="middle">
      <Spin size="small" />
      <Spin />
      <Spin size="large" />
    </Flex>
  );
};

export default Spinner;
