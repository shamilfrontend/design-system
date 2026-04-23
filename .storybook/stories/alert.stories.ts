import type { Meta, StoryObj } from "@storybook/vue3";
import { DsAlert } from "../../src/components";

const tones = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
] as const;

const leftBorderTones = ["primary", "secondary", "success"] as const;

const meta: Meta<typeof DsAlert> = {
  title: "Components/Alert",
  component: DsAlert,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BasicAlerts: Story = {
  name: "Basic alerts",
  render: () => ({
    components: { DsAlert },
    setup() {
      return { tones };
    },
    template: `
      <div style="display:grid; gap:10px;">
        <DsAlert
          v-for="tone in tones"
          :key="'basic-' + tone"
          :tone="tone"
          title="Simple alert"
          :description="'Simple ' + tone + ' alert - check it out'"
        />
      </div>
    `,
  }),
};

export const OutlineAlerts: Story = {
  name: "Outline alerts",
  render: () => ({
    components: { DsAlert },
    setup() {
      return { tones };
    },
    template: `
      <div style="display:grid; gap:10px;">
        <DsAlert
          v-for="tone in tones"
          :key="'outline-' + tone"
          variant="outline"
          :tone="tone"
          title="Outline alert"
          :description="'Outline ' + tone + ' alert - check it out'"
        />
      </div>
    `,
  }),
};

export const LightAlerts: Story = {
  name: "Light alerts",
  render: () => ({
    components: { DsAlert },
    setup() {
      return { tones };
    },
    template: `
      <div style="display:grid; gap:10px;">
        <DsAlert
          v-for="tone in tones"
          :key="'light-' + tone"
          variant="light"
          :tone="tone"
          title="Light alert"
          :description="'Light ' + tone + ' color alert with link style'"
        />
      </div>
    `,
  }),
};

export const AlertWithIcons: Story = {
  name: "Alert with icons",
  render: () => ({
    components: { DsAlert },
    setup() {
      return { tones };
    },
    template: `
      <div style="display:grid; gap:10px;">
        <DsAlert
          v-for="tone in tones"
          :key="'icon-' + tone"
          variant="label"
          :tone="tone"
          icon="i"
          title="Alert with icon"
          :description="'Label ' + tone + ' alert - check it out'"
        />
      </div>
    `,
  }),
};

export const LeftBorderAlerts: Story = {
  name: "Left border alerts",
  render: () => ({
    components: { DsAlert },
    setup() {
      return { leftBorderTones };
    },
    template: `
      <div style="display:grid; gap:10px;">
        <DsAlert
          v-for="tone in leftBorderTones"
          :key="'left-' + tone"
          variant="left-border"
          :tone="tone"
          title="Alert with left border"
          description="Alert with left slide border - check out!"
        />
      </div>
    `,
  }),
};

export const DismissibleAlerts: Story = {
  name: "Dismissible alerts",
  render: () => ({
    components: { DsAlert },
    template: `
      <div style="display:grid; gap:10px;">
        <DsAlert
          tone="primary"
          dismissible
          title="We have Cookies!"
          description="We use it to ensure you get the best experience on our website and service."
        />
        <DsAlert
          variant="label"
          tone="success"
          dismissible
          icon="!"
          title="Your order is delayed"
          description="Check delivery details and confirm update."
        >
          <template #actions>
            <button class="ds-control ds-button ds-button--primary" type="button">Accept</button>
          </template>
        </DsAlert>
      </div>
    `,
  }),
};

export const AdditionalContent: Story = {
  name: "Additional content",
  render: () => ({
    components: { DsAlert },
    template: `
      <div style="display:grid; gap:10px;">
        <DsAlert
          variant="additional"
          tone="warning"
          dismissible
          title="Under maintenance"
          description="Our team is currently checking some errors in this area."
        >
          We do not recommend changing any settings until the next update.
          <template #actions>
            <button class="ds-control ds-button ds-button--secondary" type="button">Get more info</button>
          </template>
        </DsAlert>
      </div>
    `,
  }),
};
