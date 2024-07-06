import { AccountController } from "./controllers/AccountController.js";
import { ClocksController } from "./controllers/ClocksController.js";
import { BackgroundsController } from "./controllers/BackgroundsController.js";
import { QuotesController } from "./controllers/QuotesController.js";
import { ToDosController } from "./controllers/ToDosController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";
import { WeathersController } from "./controllers/WeathersController.js";


export const router = new Router([
  {
    path: '',
    controllers: [ToDosController, QuotesController, ClocksController, BackgroundsController, WeathersController],
    view: `app/views/InspireView.html`
  },
  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])




