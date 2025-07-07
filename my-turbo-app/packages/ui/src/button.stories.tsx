import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      description: '버튼의 시각적 스타일을 정의합니다.',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: '기본 버튼',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: '보조 버튼',
    variant: 'secondary',
  },
};

export const DisabledPrimary: Story = {
  args: {
    children: '비활성화된 기본 버튼',
    variant: 'primary',
    disabled: true,
  },
};

export const DisabledSecondary: Story = {
  args: {
    children: '비활성화된 보조 버튼',
    variant: 'secondary',
    disabled: true,
  },
};

export const CustomText: Story = {
  args: {
    children: '클릭하세요!',
    variant: 'primary',
  },
};