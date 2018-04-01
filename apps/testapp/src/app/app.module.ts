import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { NxModule } from "@nrwl/nx";
import { PresentationalComponentsModule } from "@my-company-frontend/presentational-components";

@NgModule({
  imports: [BrowserModule, NxModule.forRoot(), PresentationalComponentsModule ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
