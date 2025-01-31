import { postTweetAction } from "./actions/postTweetAction";

export const twitterPlugin = {
    name: "twitter",
    description: "Twitter integration plugin for posting tweets with proof generated by primus",
    actions: [postTweetAction],
    evaluators: [],
    providers: [],
};

export default twitterPlugin;