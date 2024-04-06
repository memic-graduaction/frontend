import { Meta, StoryObj } from '@storybook/react';
import ToggleBtn from './ToggleBtn';

const meta = {
  component: ToggleBtn,
  title: 'SideBar/ToggleBtn',
} satisfies Meta<typeof ToggleBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
