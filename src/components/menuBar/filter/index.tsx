import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useRef } from "react";
import useStore, {CategoryFilter, HashtagFilter} from "@/components/stores/todoStore";
import {useCategoriesQuery, useHashtagsQuery} from "@/components/hooks";

type FilterRefs = {
    categoryRef: React.RefObject<string>;
    hashtagRef: React.RefObject<string>;
};

function submit(filterRefs: FilterRefs, setCategoryFilter : (categoryFilter: CategoryFilter) => void, setHashtagFilter : ((hashtagFilter: HashtagFilter) => void)) {
    setCategoryFilter({category: filterRefs.categoryRef?.current ?? "All"});
    setHashtagFilter({hashtag: filterRefs.hashtagRef?.current ?? "All"});
}

export function Filters() {
    const categoryRef = useRef<string>("All");
    const hashtagRef = useRef<string>("All");
    const {setCategoryFilter, setHashtagFilter} = useStore();
    const { data: categoryList } = useCategoriesQuery();
    const { data: hashtagList} = useHashtagsQuery();
    const handleValueChange = (ref: React.MutableRefObject<string>, value: string) => {
        ref.current = value;
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="ghost" size="lg">Filters</Button>
            </PopoverTrigger>
            <PopoverContent
                className="w-80"
                onPointerDownOutside={() => submit({ categoryRef, hashtagRef}, setCategoryFilter, setHashtagFilter)}
            >
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">Filters</h4>
                        <p className="text-sm text-muted-foreground">Set the filters</p>
                    </div>
                    <div className="grid gap-2">
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="category">Category</Label>
                            <Select onValueChange={(value) => handleValueChange(categoryRef, value)}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a category" defaultValue="All"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="All">All</SelectItem>
                                    {categoryList.map((category, index) => (
                                        <SelectItem key={index} value={category}>
                                            {category}
                                        </SelectItem>))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="hashtag">Hashtag</Label>
                            <Select onValueChange={(value) => handleValueChange(hashtagRef, value)}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a hashtag" defaultValue="All"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="All">All</SelectItem>
                                    {hashtagList.map((hashtag, index) => (
                                        <SelectItem key={index} value={hashtag}>
                                            {hashtag}
                                        </SelectItem>))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}
