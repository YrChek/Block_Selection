import { ViewVideo, ViewArticle } from "./ComponentWiews";
import { nanoid } from "nanoid";

function List(props) {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <ViewVideo {...item} key={nanoid()}/>
                );

            case 'article':
                return (
                    <ViewArticle {...item} key={nanoid()}/>
                );
        }
    });
}

export default List
