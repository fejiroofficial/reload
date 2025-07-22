import tick from '../../assets/png/tick.png';
import close from '../../assets/png/close-sharp.png';
import setting from '../../assets/svg/construct.svg';
import bolt from '../../assets/svg/bolt.svg';
import graph from '../../assets/svg/graph.svg';
import platform from '../../assets/svg/platform.svg';
import headphone from '../../assets/svg/headphone.svg';
import guard from '../../assets/svg/guard.svg';
import user from '../../assets/svg/user.svg';
import cloud from '../../assets/svg/cloud.svg';
import scale from '../../assets/svg/scale.svg';
export const ourFeatures = [
  { icon: tick, text: 'Unified dashboard for total control' },
  { icon: tick, text: 'Deploy instantly, no downtime' },
  { icon: tick, text: 'Automation built into every workflow' },
  { icon: tick, text: 'Real-time insights and smart analytics' },
  { icon: tick, text: 'Clean, modern, intuitive interface' },
];

export const otherFeatures = [
  { icon: close, text: 'Scattered tools across platforms' },
  { icon: close, text: 'Slow and manual deployments' },
  { icon: close, text: 'Manual processes and repetitive tasks' },
  { icon: close, text: 'Limited data and delayed reporting' },
  { icon: close, text: 'Outdated and cluttered dashboards' },
];


export const topCards = [
  {
    image: setting,
    title: 'Instant Setup',
    description: 'Spin up your workspace in seconds. No complex installs or setups required.',
  },
  {
    image: bolt,
    title: 'Blazing Fast Infrastructure',
    description: 'Deploy applications with confidence and minimal setup time.',
  },
  {
    image: graph,
    title: 'Seamless Integration',
    description: 'From builds to backups, automation handles the busy work so you can ship faster.',
  },
];

export const bottomCards = [
  {
    image: platform,
    title: 'All-in-One Platform',
    description:
      'No more juggling tools. Manage everything  deploys, monitoring, scaling in one place.',
  },
  {
    image: headphone,
    title: 'Reliable Support',
    description: 'Get 24/7 expert help whenever you hit a blocker, with real people behind every ticket.',
  },
  {
    image: guard,
    title: 'Secure by Default',
    description: 'Enterprise-grade security baked in, so compliance & privacy are never a problem.',
  },
];

export const graphCards = [
  {
    image: scale,
    title: 'Built to Scale',
    description:
      'Whether you`re serving 10 users or 10 million, Reload grows with you',
  },
  {
    image: cloud,
    title: 'Performance That Pays Off',
    description: 'Improved uptime, faster load times, and measurable business impact from day one.',
  },
  {
    image: user,
    title: 'Trusted by Leading Teams',
    description: 'Join the companies already building smarter and moving faster with Reload.',
  },
];

export const steps = [
  {
    number: 1,
    title: "Create Your Account",
    description: "No setup friction. No engineering delay. Just plug in and go.",
  },
  {
    number: 2,
    title: "Integrate Your Tools and Stack",
    description: "Connect your existing workflows, environments, and services.",
  },
  {
    number: 3,
    title: "Deploy, Automate, and Grow Effortlessly",
    description: "Go live confidently with auto-scaling, analytics, and 24/7 support.",
  },
];