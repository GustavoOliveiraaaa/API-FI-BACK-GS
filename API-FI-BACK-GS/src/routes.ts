import { UserGSController } from "./controller/UserController"
import { SistemaGSController} from "./controller/UserController"

export const Routes = [{
    method: "get",
    route: "/UserGS",
    controller: UserGSController,
    action: "all"
}, {
    method: "get",
    route: "/UserGS/:id",
    controller: UserGSController,
    action: "one"
}, {
    method: "post",
    route: "/UserGS",
    controller: UserGSController,
    action: "save"
}, {
    method: "delete",
    route: "/UserGS/:id",
    controller: UserGSController,
    action: "remove"
 
}, { 


    method: "get",
    route: "/SistemaGS",
    controller: SistemaGSController,
    action: "all"
}, {
    method: "get",
    route: "/SistemaGS/:id",
    controller: SistemaGSController,
    action: "one"
}, {
    method: "post",
    route: "/SistemaGS",
    controller: SistemaGSController,
    action: "save"
}, {
    method: "delete",
    route: "/SistemaGS/:id",
    controller: SistemaGSController,
    action: "remove"
  
}]

