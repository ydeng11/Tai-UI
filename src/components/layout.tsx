import React from 'react';
import AddTodo from "@/components/menuBar/addTodo";
import {Filters} from "@/components/menuBar/filter";
import Header from "@/components/header";
import TodoList from "@/components/display/listing";
import Today from "@/components/display/today";
import {CategoryList} from "@/components/menuBar/categoryList";
import {HashtagList} from "@/components/menuBar/hashtagList";

const Layout: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="container mx-auto p-4">
                <div className="mx-auto flex flex-wrap">
                    <div className="w-1/5 flex flex-col items-start space-y-4">
                        <AddTodo />
                        <Filters />
                        <CategoryList />
                        <HashtagList />
                    </div>
                    <div className="w-4/5 flex flex-col items-start">
                        <Today />
                        <TodoList/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
