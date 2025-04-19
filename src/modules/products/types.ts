import {inferRouterOutputs} from '@trpc/server';

import type {AppRouter} from '@/trpc/routes/_app'

export type ProductsGetManyOutput=inferRouterOutputs<AppRouter>['products']['getMany'];