
import {
    CircularPaginationIconRight,
    CircularPaginationIconLeft
} from '@/utils/arrowIcons'

export default function PaginationItemRender(page: Number, type: String, originalElement: React.ReactNode) {

    if (type === "prev") {
        return <div style={{marginRight : '5px'}}>
            <CircularPaginationIconLeft />
        </div>
    }
    if (type === "next") {
        return <div style={{marginLeft : '5px'}}>
            <CircularPaginationIconRight />
        </div>;
    }
    return originalElement;
};