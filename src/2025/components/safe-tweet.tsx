import { Component, ReactNode } from "react";
import { Tweet } from "react-tweet";

type Props = { id: string };
type State = { hasError: boolean };

// react-tweet@3.3.0 throws "entities is not iterable" inside enrichTweet when
// Twitter's syndication API returns null for any of entities.{hashtags,
// user_mentions, urls, symbols}. A single bad tweet would otherwise crash the
// whole page, so we isolate each Tweet behind its own error boundary.
class SafeTweet extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    if (import.meta.env.DEV) {
      console.warn(`<Tweet id="${this.props.id}"> failed to render`, error);
    }
  }

  render(): ReactNode {
    if (this.state.hasError) return null;
    return <Tweet id={this.props.id} />;
  }
}

export default SafeTweet;
