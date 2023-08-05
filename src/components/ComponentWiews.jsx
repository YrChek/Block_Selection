import React from "react";
import Video from "./Video";
import New from "./New";
import Popular from "./Popular";
import Article from "./Article";

function view(Component) {
  return class extends React.Component {
    static get displayName() {
      const name = Component.displayName || Component.name || 'Component';
      return `View(${name})`;
    }
    render() {
    const views = this.props;
    if (views.views > 100) {
      return (
        <Popular >
          <Component {...this.props}/>
        </Popular>
      );
    } else {
      return (
        <New >
          <Component {...this.props}/>
        </New>
      );
    }
    }
  }
}

export  const ViewVideo = view(Video)
export const ViewArticle = view(Article)
