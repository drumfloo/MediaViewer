'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">zam documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-ddc6b9faf5bdc639293b7f2adcd6a8006ed3ffdf45c4c902f6cd3a3aeba0c54207a0064dd8ea84c0f69f814d2487f9adb67a415e7282f1814fbab37c2614f4ed"' : 'data-bs-target="#xs-components-links-module-AppModule-ddc6b9faf5bdc639293b7f2adcd6a8006ed3ffdf45c4c902f6cd3a3aeba0c54207a0064dd8ea84c0f69f814d2487f9adb67a415e7282f1814fbab37c2614f4ed"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-ddc6b9faf5bdc639293b7f2adcd6a8006ed3ffdf45c4c902f6cd3a3aeba0c54207a0064dd8ea84c0f69f814d2487f9adb67a415e7282f1814fbab37c2614f4ed"' :
                                            'id="xs-components-links-module-AppModule-ddc6b9faf5bdc639293b7f2adcd6a8006ed3ffdf45c4c902f6cd3a3aeba0c54207a0064dd8ea84c0f69f814d2487f9adb67a415e7282f1814fbab37c2614f4ed"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-d0df23bb042e3264b19707bae521d29ac01c73df59fae4101206ec37286435bd477c91a3dd8154642238fd7eb15c826022cb24ca255e25031dae0e4ca8e5b7b2-1"' : 'data-bs-target="#xs-components-links-module-AppModule-d0df23bb042e3264b19707bae521d29ac01c73df59fae4101206ec37286435bd477c91a3dd8154642238fd7eb15c826022cb24ca255e25031dae0e4ca8e5b7b2-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-d0df23bb042e3264b19707bae521d29ac01c73df59fae4101206ec37286435bd477c91a3dd8154642238fd7eb15c826022cb24ca255e25031dae0e4ca8e5b7b2-1"' :
                                            'id="xs-components-links-module-AppModule-d0df23bb042e3264b19707bae521d29ac01c73df59fae4101206ec37286435bd477c91a3dd8154642238fd7eb15c826022cb24ca255e25031dae0e4ca8e5b7b2-1"' }>
                                            <li class="link">
                                                <a href="components/AppComponent-1.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GridContentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GridContentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ToolbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ToolbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-923bc1634db0b63311d7d45e7665fd9a94588444bd436b4f9b9171ef94767ed4a0c2a9ffe877b2fa1e30d7d29d2df41ebc59f0f32a2bcfe15a0092c878fc38e4-2"' : 'data-bs-target="#xs-components-links-module-AppModule-923bc1634db0b63311d7d45e7665fd9a94588444bd436b4f9b9171ef94767ed4a0c2a9ffe877b2fa1e30d7d29d2df41ebc59f0f32a2bcfe15a0092c878fc38e4-2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-923bc1634db0b63311d7d45e7665fd9a94588444bd436b4f9b9171ef94767ed4a0c2a9ffe877b2fa1e30d7d29d2df41ebc59f0f32a2bcfe15a0092c878fc38e4-2"' :
                                            'id="xs-components-links-module-AppModule-923bc1634db0b63311d7d45e7665fd9a94588444bd436b4f9b9171ef94767ed4a0c2a9ffe877b2fa1e30d7d29d2df41ebc59f0f32a2bcfe15a0092c878fc38e4-2"' }>
                                            <li class="link">
                                                <a href="components/AppComponent-2.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ComService.html" data-type="entity-link" >ComService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ComService-1.html" data-type="entity-link" >ComService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GridContentComponent.html" data-type="entity-link" >GridContentComponent</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SharedService.html" data-type="entity-link" >SharedService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/YoutubeService.html" data-type="entity-link" >YoutubeService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/CallbackMap.html" data-type="entity-link" >CallbackMap</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CallbackMap-1.html" data-type="entity-link" >CallbackMap</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});