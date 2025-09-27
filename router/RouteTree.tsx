import IndexPage from '../src/page/000.index/page';
import TitlePage from '../src/page/001.title/page';

import TestSurfacePage from '../src/page/002.test-surface/page';


import {
    Link,
    Outlet,
    RouterProvider,
    createRootRoute,
    createRoute,
    createRouter,
} from '@tanstack/react-router'

import React from "react";

import NavBar from "./NavBar"


const rootRoute = createRootRoute({
    component: () => (
        <>

            <div >

                <NavBar />

                <div style={{ position: 'absolute', left: 0, right: 0, marginInline: 'auto', width: 'fit-content' }} >
                    <Outlet />
                </div>

            </div>

        </>
    ),
});

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: function Index() {
        return (
            <IndexPage />
        );
    },
});

const testSurfaceRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/surface-test",
    component: function Test() {
        return (
            <TestSurfacePage />
        );
    },
});


const titleRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/title",
    component: function Test() {
        return (
            <TitlePage />
        );
    },
});

const testWriteSpritesheet = createRoute({
    getParentRoute: () => rootRoute,
    path: "/write-spritesheet-test",
    component: function Test() {
        return (
            <TitlePage />
        );
    },
});




export var RouteTree = () => {

    var item = rootRoute.addChildren([indexRoute, testSurfaceRoute, titleRoute ]);
    return item

}

