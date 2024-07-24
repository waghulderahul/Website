import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { DigitalAgencyComponent } from './components/pages/digital-agency/digital-agency.component';
import { DigitalAgencyTwoComponent } from './components/pages/digital-agency-two/digital-agency-two.component';
import { DigitalAgencyThreeComponent } from './components/pages/digital-agency-three/digital-agency-three.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { ProjectDetailsComponent } from './components/pages/project-details/project-details.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ServiceDetailsComponent } from './components/pages/service-details/service-details.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { TeamComponent } from './components/pages/team/team.component';
import { TestimonialsComponent } from './components/pages/testimonials/testimonials.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { DigitalAgencyFourComponent } from './components/pages/digital-agency-four/digital-agency-four.component';
import { BusinessStartupsComponent } from './components/pages/business-startups/business-startups.component';
import { SeoAgencyComponent } from './components/pages/seo-agency/seo-agency.component';
import { CorporateAgencyComponent } from './components/pages/corporate-agency/corporate-agency.component';
import { DigitalMarketingComponent } from './components/pages/digital-marketing/digital-marketing.component';
import { BusinessConsultingComponent } from './components/pages/business-consulting/business-consulting.component';
import { CreativeAgencyComponent } from './components/pages/creative-agency/creative-agency.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DigitalAgencyComponent,
    DigitalAgencyTwoComponent,
    DigitalAgencyThreeComponent,
    ProjectsComponent,
    ProjectDetailsComponent,
    ServicesComponent,
    ServiceDetailsComponent,
    BlogComponent,
    BlogDetailsComponent,
    TeamComponent,
    TestimonialsComponent,
    AboutComponent,
    ContactComponent,
    DigitalAgencyFourComponent,
    BusinessStartupsComponent,
    SeoAgencyComponent,
    CorporateAgencyComponent,
    DigitalMarketingComponent,
    BusinessConsultingComponent,
    CreativeAgencyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
