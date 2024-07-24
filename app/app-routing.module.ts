import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DigitalAgencyComponent } from './components/pages/digital-agency/digital-agency.component';
import { DigitalAgencyTwoComponent } from './components/pages/digital-agency-two/digital-agency-two.component';
import { DigitalAgencyThreeComponent } from './components/pages/digital-agency-three/digital-agency-three.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { ProjectDetailsComponent } from './components/pages/project-details/project-details.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ServiceDetailsComponent } from './components/pages/service-details/service-details.component';
import { TeamComponent } from './components/pages/team/team.component';
import { TestimonialsComponent } from './components/pages/testimonials/testimonials.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { DigitalAgencyFourComponent } from './components/pages/digital-agency-four/digital-agency-four.component';
import { BusinessStartupsComponent } from './components/pages/business-startups/business-startups.component';
import { SeoAgencyComponent } from './components/pages/seo-agency/seo-agency.component';
import { CorporateAgencyComponent } from './components/pages/corporate-agency/corporate-agency.component';
import { DigitalMarketingComponent } from './components/pages/digital-marketing/digital-marketing.component';
import { BusinessConsultingComponent } from './components/pages/business-consulting/business-consulting.component';
import { CreativeAgencyComponent } from './components/pages/creative-agency/creative-agency.component';

const routes: Routes = [
    { path: '', component: DigitalAgencyTwoComponent },
    { path: 'digital-agency-demo-2', component: DigitalAgencyComponent },
    { path: 'digital-agency-demo-3', component: DigitalAgencyThreeComponent },
    { path: 'digital-agency-demo-4', component: DigitalAgencyFourComponent },
    { path: 'business-startups', component: BusinessStartupsComponent },
    { path: 'seo-agency', component: SeoAgencyComponent },
    { path: 'corporate-agency', component: CorporateAgencyComponent },
    { path: 'digital-marketing', component: DigitalMarketingComponent },
    { path: 'business-consulting', component: BusinessConsultingComponent },
    { path: 'creative-agency', component: CreativeAgencyComponent },
    { path: 'about', component: AboutComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'project-details', component: ProjectDetailsComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'service-details', component: ServiceDetailsComponent },
    { path: 'team', component: TeamComponent },
    { path: 'testimonials', component: TestimonialsComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'blog-details', component: BlogDetailsComponent },
    { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
