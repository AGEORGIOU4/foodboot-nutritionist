import React from 'react'

// foodboot
const Users = React.lazy(() => import('./views/users/Users'))

const Clients = React.lazy(() => import('./views/clients/Clients'))
const CreateClient = React.lazy(() => import('./views/clients/clients/Create-Client'))
const EditClient = React.lazy(() => import('./views/clients/clients/Edit-Client'))
const ViewClient = React.lazy(() => import('./views/clients/clients/View-Client'))

const Profile = React.lazy(() => import('./views/profile/Profile'))
const EditProfile = React.lazy(() => import('./views/profile/Edit-Profile'))

const MealPlans = React.lazy(() => import('./views/meal-plans/Meal-Plans'))
const UpdateMealPlan = React.lazy(() => import('./views/meal-plans/meal-plans/Update-Meal-Plan'))
const ViewMealPlan = React.lazy(() => import('./views/meal-plans/meal-plans/View-Meal-Plan'))

const NutritionFacts = React.lazy(() => import('./views/nutrition-facts/Nutrition-Facts'))

const Analytics = React.lazy(() => import('./views/analytics/Analytics'))

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const LoadCalendar = React.lazy(() => import('./views/calendar/Load-Calendar'))
const PersonalCalendar = React.lazy(() => import('./views/calendar/Personal-Calendar'))


const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const LoadingButtons = React.lazy(() => import('./views/buttons/loading-buttons/LoadingButtons'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const MultiSelect = React.lazy(() => import('./views/forms/multi-select/MultiSelect'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const SmartTable = React.lazy(() => import('./views/smart-table/SmartTable'))

// Plugins
const Charts = React.lazy(() => import('./views/plugins/charts/Charts'))
const GoogleMaps = React.lazy(() => import('./views/plugins/google-maps/GoogleMaps'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const Invoice = React.lazy(() => import('./views/apps/invoicing/Invoice'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },

  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', component: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', component: Placeholders },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress', name: 'Progress', component: Progress },
  { path: '/base/spinners', name: 'Spinners', component: Spinners },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/loading-buttons', name: 'Loading Buttons', component: LoadingButtons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/forms', name: 'Forms', component: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', component: FormControl },
  { path: '/forms/select', name: 'Select', component: Select },
  { path: '/forms/multi-select', name: 'Multi Select', component: MultiSelect },
  { path: '/forms/checks-radios', name: 'Checks & Radios', component: ChecksRadios },
  { path: '/forms/range', name: 'Range', component: Range },
  { path: '/forms/input-group', name: 'Input Group', component: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', component: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', component: Layout },
  { path: '/forms/validation', name: 'Validation', component: Validation },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toasts', name: 'Toasts', component: Toasts },
  { path: '/plugins/charts', name: 'Charts', component: Charts },
  { path: '/plugins/google-maps', name: 'GoogleMaps', component: GoogleMaps },
  { path: '/smart-table', name: 'Smart Table', component: SmartTable },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/apps', name: 'Apps', component: Invoice, exact: true },
  { path: '/apps/invoicing', name: 'Invoice', component: Invoice, exact: true },
  { path: '/apps/invoicing/invoice', name: 'Invoice', component: Invoice },
  { path: '/apps/email', name: 'Email', exact: true },
  { path: '/apps/email/inbox', name: 'Inbox', exact: true },
  { path: '/apps/email/compose', name: 'Compose', exact: true },
  { path: '/apps/email/message', name: 'Message', exact: true },

  { path: '/users', name: 'Users', component: Users },

  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/edit-profile', name: 'Edit Profile', component: EditProfile },


  { path: '/clients', name: 'Clients', component: Clients, exact: true },
  { path: '/clients/create-client', name: 'Create Client', component: CreateClient },
  { path: '/clients/edit-client', name: 'Edit Client', component: EditClient },
  { path: '/clients/view-client', name: 'View Client', component: ViewClient },

  { path: '/meal-plans', name: 'Meal Plans', component: MealPlans, exact: true },
  { path: '/meal-plans/update-meal-plan', name: 'Update Meal Plan', component: UpdateMealPlan },
  { path: '/meal-plans/view-meal-plan', name: 'View Meal Plan', component: ViewMealPlan },

  { path: '/nutrition-facts', name: 'Nutrition Facts', component: NutritionFacts },
  { path: '/analytics', name: 'Analytics', component: Analytics },


  { path: '/calendar', name: 'Calendar', component: LoadCalendar },
  { path: '/personal-calendar', name: 'Calendar', component: PersonalCalendar },
]

export default routes
