import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {Fragment} from "react";
import {useCategoriesQuery} from "@/components/hooks";


export function CategoryList() {
    const { data: categoryList } = useCategoriesQuery();
    return (
        <ScrollArea className="rounded-md pl-4 max-w-xs">
            <div className="p-4">
                <h4 className="mb-4 text-sm font-medium leading-none">Categories</h4>
                {categoryList.map((category, index) => (
                    <Fragment key={index}>
                        <div className="text-sm">
                            {category}
                        </div>
                        <Separator className="my-2"/>
                    </Fragment>
                ))}
            </div>
        </ScrollArea>
    )
}
