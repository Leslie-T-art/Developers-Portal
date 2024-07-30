// types
import { Feature } from "../shared/landings.model";
import { Blog, Coin } from "./crypto.model";

const COINS: Coin[] = [
    {
        icon: 'assets/images/icons/coins/btc.svg',
        name: 'Bitcoin',
    },
    {
        icon: 'assets/images/icons/coins/eth.svg',
        name: 'Ethereum',
    },
    {
        icon: 'assets/images/icons/coins/usdt.svg',
        name: 'Tether',
    },
    {
        icon: 'assets/images/icons/coins/link.svg',
        name: 'Chainlink',
    },
    {
        icon: 'assets/images/icons/coins/bat.svg',
        name: 'Basic Attention Token',
    },
    {
        icon: 'assets/images/icons/coins/dash.svg',
        name: 'Dash',
    },
    {
        icon: 'assets/images/icons/coins/bnb.svg',
        name: 'Binance Coin',
    },
    {
        icon: 'assets/images/icons/coins/xtz.svg',
        name: 'Tezos',
    },
];

const FEATURES: Feature[] = [
    {
        icon: 'shield',
        title: 'Secure & Encrypted Transactions',
        description: 'Advanced payment and processing technologies, fine-tuned from more than 3 years development',
    },
    {
        icon: 'credit-card',
        title: 'Transparent Fees',
        description: 'Barbelless catfish pelican gulper candlefish thornfishGulf menhaden ribbonbearer riffle.',
    },
    {
        icon: 'smile',
        title: 'Easy to Use',
        description: 'Asiatic glassfish pilchard sandburrower, orangestriped triggerfish hamlet Molly Miller dogfish!',
    },
    {
        icon: 'phone-call',
        title: 'Quality Support',
        description: 'Clownfish catfish antenna codlet alfonsino squirrelfish deepwater flathead sea lamprey.',
    },
];

const BLOGS: Blog[] = [
    {
        image: 'assets/images/blog/crypto1.jpg',
        ribbon: {
            text: 'Announcement',
            variant: 'orange'
        },
        date: 'May 19 2020',
        duration: 5,
        title: 'Introducing blazzing fast new user interface'
    },
    {
        image: 'assets/images/blog/crypto3.jpg',
        ribbon: {
            text: 'Bitcoin',
            variant: 'danger'
        },
        date: 'May 18 2020',
        duration: 8,
        title: 'What you should know before buying bitcoin'
    },
    {
        image: 'assets/images/blog/crypto2.jpg',
        ribbon: {
            text: 'Event',
            variant: 'primary'
        },
        date: 'May 13 2020',
        duration: 2,
        title: 'A biggest crypto event to attend this month'
    }
];

export { COINS, FEATURES, BLOGS };