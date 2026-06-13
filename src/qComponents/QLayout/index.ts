import { withInstall } from '../helpers';

import Container from './src/QContainer.vue';
import Footer from './src/QFooter.vue';
import Header from './src/QHeader.vue';
import Layout from './src/QLayout.vue';
import Sidebar from './src/QSidebar.vue';

export const QContainer = withInstall(Container);
export const QLayout = withInstall(Layout);
export const QHeader = withInstall(Header);
export const QSidebar = withInstall(Sidebar);
export const QFooter = withInstall(Footer);

export type { QContainerPropSize } from './src/QContainer.vue';
