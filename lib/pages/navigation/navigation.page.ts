import { type Locator, type Page } from "playwright"

export class NavigationPage {
    readonly page: Page
    readonly pageTitle: Locator
    //readonly navToLanding: Locator

    readonly navToPlatform: Locator
    readonly navToSolutions: Locator
    readonly navToProducts: Locator
    readonly navToResources: Locator
    readonly navToCompany: Locator
    readonly navToRequestDemo: Locator

    //Platform submenu - Capabilities
    readonly navToAdaptiveWorkflows: Locator
    readonly navToArtificialIntelligence: Locator
    readonly navToMaterialAndOntologyManagement: Locator

    //Platform submenu - Luma products
    readonly navToBioGlyphLuma: Locator
    readonly navToFCSExpressLuma: Locator
    readonly navToGeneiousLuma: Locator
    readonly navToLabConnect: Locator
    readonly navToOMIQLuma: Locator

    //Solutions submenu - Solutions
    readonly navToAntibodyAndProteinEngineering: Locator
    readonly navToFlowCytometry: Locator

    //Solutions submenu - Industry
    readonly navToBiologyDiscovery: Locator
    readonly navToChemistryRAndD: Locator
    readonly navToChemicalsAndMaterials: Locator

    //Products submenu - Bioinfomatics
    readonly navToSnapGene: Locator
    readonly navToGeneiousPrime: Locator
    readonly navToGeneiousBiologics: Locator

    //Products submenu - Cheminformatics
    readonly navToVortex: Locator

    //Products submenu - Data analysis & visualization
    readonly navToPrism: Locator

    //Products submenu - ELN
    readonly navToELNAndDataDiscoveryPlatform: Locator

    //Products submenu - Flow cytometry
    readonly navToOMIQ: Locator
    readonly navToFCSExpress: Locator

    //Products submenu - Multimodal science
    readonly navToScientificIntelligencePlatform: Locator

    //Products submenu - Proteomics
    readonly navToProteinMetrics: Locator

    //Resources submenu - Resource
    readonly navToAllResources: Locator
    readonly navToBlog: Locator
    readonly navToCaseStudies: Locator
    readonly navToEbooksAndWhitePapers: Locator
    readonly navToVideos: Locator

    //Resources submenu - Events
    readonly navToUpcomingEventsAndWebinars: Locator

    //Company submenu
    readonly navToAboutUs: Locator
    readonly navToCareers: Locator
    readonly navToContactUs: Locator
    readonly navToNewsAndMedia: Locator
    readonly navToPartners: Locator
    readonly navToPortfolio: Locator

    constructor(page: Page) {
        this.page = page
        this.pageTitle = page.getByTestId('page-title')
        //this.navToLanding = page.getByRole('link', { name: '' })
        this.navToPlatform = page.getByRole('list').getByText('Platform', { exact: true })
        this.navToSolutions = page.getByText('Solutions').first()
        this.navToProducts = page.getByRole('list').getByText('Products', { exact: true })
        this.navToResources = page.getByText('Resources').first()
        this.navToCompany = page.getByRole('list').getByText('Company', { exact: true })
        this.navToRequestDemo = page.locator('#header').getByRole('link', { name: 'Request Demo' })

        //Platform submenu - Capabilities
        this.navToAdaptiveWorkflows = page.getByRole('link', { name: 'Adaptive Workflows '})
        this.navToArtificialIntelligence = page.getByRole('link', { name: 'Artificial Intelligence' })
        this.navToMaterialAndOntologyManagement = page.getByRole('link', { name: 'Material & Ontology Management' })

        //Platform submenu - Luma products
        this.navToBioGlyphLuma = page.getByRole('link', { name: 'BioGlyph Luma' })
        this.navToFCSExpressLuma = page.getByRole('link', { name: 'FCS Express Luma' })
        this.navToGeneiousLuma = page.getByRole('link', { name: 'Geneious Luma' })
        this.navToLabConnect = page.getByRole('link', { name: 'Lab Connect' })
        this.navToOMIQLuma = page.getByRole('link', { name: 'OMIQ Luma' })

        //Solutions submenu - Solutions
        this.navToAntibodyAndProteinEngineering = page.getByRole('link', { name: 'Antibody & Protein Engineering'})
        this.navToFlowCytometry = page.getByRole('link', { name: 'Flow Cytometry'})

        //Solutions submenu - Industry
        this.navToBiologyDiscovery = page.getByRole('link', { name: 'Biology Discovery'})
        this.navToChemistryRAndD = page.getByRole('link', { name: 'Chemistry R&D'})
        this.navToChemicalsAndMaterials = page.getByRole('link', { name: 'Chemicals and Materials'})

        //Products submenu - Bioinfomatics
        this.navToSnapGene = page.getByRole('link', { name: 'SnapGene', exact: true })
        this.navToGeneiousPrime = page.getByRole('link', { name: 'Geneious Prime', exact: true })
        this.navToGeneiousBiologics = page.getByRole('link', { name: 'Geneious Biologics', exact: true })

        //Products submenu - Cheminformatics
        this.navToVortex = page.getByRole('link', { name: 'Vortex', exact: true })

        //Products submenu - Data analysis & visualization
        this.navToPrism = page.getByRole('link', { name: 'Prism', exact: true })

        //Products submenu - ELN
        this.navToELNAndDataDiscoveryPlatform = page.getByRole('link', { name: 'ELN & Data Discovery Platform', exact: true })

        //Products submenu - Flow cytometry
        this.navToOMIQ = page.getByRole('link', { name: 'OMIQ', exact: true })
        this.navToFCSExpress = page.getByRole('link', { name: 'FCS Express', exact: true })

        //Products submenu - Multimodal science
        this.navToScientificIntelligencePlatform = page.getByRole('link', { name: 'Scientific Intelligence Platform', exact: true })

        //Products submenu - Proteomics
        this.navToProteinMetrics = page.getByRole('link', { name: 'Protein Metrics', exact: true })

        //Resources submenu - Resource
        this.navToAllResources = page.getByRole('link', { name: 'All Resources', exact: true })
        this.navToBlog = page.getByRole('link', { name: 'BLog', exact: true })
        this.navToCaseStudies = page.getByRole('link', { name: 'Case Studies', exact: true })
        this.navToEbooksAndWhitePapers = page.getByRole('link', { name: 'Ebooks & White Papers', exact: true })
        this.navToVideos = page.getByRole('link', { name: 'Videos ', exact: true })

        //Resources submenu - Events
        this.navToUpcomingEventsAndWebinars = page.getByRole('link', { name: 'Upcoming Events & Webinars', exact: true })

        //Company submenu
        this.navToAboutUs = page.getByRole('link', { name: 'About Us', exact: true })
        this.navToCareers = page.getByRole('link', { name: 'Careers', exact: true })
        this.navToContactUs = page.getByRole('link', { name: 'Contact Us', exact: true })
        this.navToNewsAndMedia = page.getByRole('link', { name: 'News & Media', exact: true })
        this.navToPartners = page.getByRole('link', { name: 'Partners', exact: true })
        this.navToPortfolio = page.getByRole('link', { name: 'Portfolio', exact: true })
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL!)
    }
}