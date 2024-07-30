// types
import { IAlbum } from "ngx-lightbox";

export interface GalleryItem {
    id?: number;
    image?: IAlbum;
    title?: string;
    description?: string;
    category?: string[];
}