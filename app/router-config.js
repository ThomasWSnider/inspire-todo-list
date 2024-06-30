import { AccountController } from "./controllers/AccountController.js";
import { QuotesController } from "./controllers/QuotesController.js";
import { ToDosController } from "./controllers/ToDosController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [ToDosController, QuotesController],
    view: `app/views/InspireView.html`
  },
  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])




