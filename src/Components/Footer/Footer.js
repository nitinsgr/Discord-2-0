import React from 'react'
import { Container, FooterSection, ContentSection, Policies, Product, Company, Resources
,ContentHeading,
Flags,
SocialIcons,
ProductContent,
ProductList,
ProductMenuItems,
CompanyContent,
CompanyList,
CompanyMemuList,
ResourceContent,
ResourceList,
ResourceMenuItem,
PoliciesList,
PoliciesMenuItem,

} from './FooterElements'
import {AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube, AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube} from 'react-icons/ai'

const Footer = () => {
    return (
       <Container>
           <FooterSection>
               <ContentSection>
                    <ContentHeading>
                        IMAGINE A PLACE
                    </ContentHeading>
                    <Flags>
                        English, USA
                    </Flags>
                    <SocialIcons>
                        <AiOutlineTwitter style={{cursor: 'pointer'}} size={30}/>
                        <AiOutlineFacebook style={{cursor: 'pointer'}} size={30}/>
                        <AiOutlineYoutube style={{cursor: 'pointer'}} size={30}/>
                        <AiOutlineInstagram style={{cursor: 'pointer'}} size={30}/>
                    </SocialIcons>
               </ContentSection>

               <Product>
                   <ProductContent>
                       Products
                   </ProductContent>

                   <ProductList>
                        <ProductMenuItems>
                            Download
                        </ProductMenuItems>
                        <ProductMenuItems>
                            Nitro
                            </ProductMenuItems>
                            <ProductMenuItems>
                                Status
                            </ProductMenuItems>
                   </ProductList>
               </Product>
               <Company>
                    <CompanyContent>
                            Company
                    </CompanyContent>
                    <CompanyList>
                        <CompanyMemuList>
                        About
                        </CompanyMemuList>
                        <CompanyMemuList>
                            Jobs
                            </CompanyMemuList>
                            <CompanyMemuList>
                            Branding
                            </CompanyMemuList>
                            <CompanyMemuList>
                                Newsroom
                            </CompanyMemuList>
                    </CompanyList>
               </Company>
               <Resources>
                    <ResourceContent>
                        Resources
                    </ResourceContent>
                    <ResourceList>
                        <ResourceMenuItem>
                            College
                        </ResourceMenuItem>
                        <ResourceMenuItem>
                            Support
                        </ResourceMenuItem>
                        <ResourceMenuItem>
                            Safety
                        </ResourceMenuItem>
                        <ResourceMenuItem>
                            Blog
                        </ResourceMenuItem>
                        <ResourceMenuItem>
                            Feedback
                        </ResourceMenuItem>
                        <ResourceMenuItem>
                            Developer
                        </ResourceMenuItem>
                        <ResourceMenuItem>
                            Streamkit
                        </ResourceMenuItem>
                    </ResourceList>
               </Resources>
               <Resources>
                    <ResourceContent>
                        Policies
                    </ResourceContent>
                    <ResourceList>
                        <ResourceMenuItem>
                            Terms
                        </ResourceMenuItem>
                        <ResourceMenuItem>
                            Privacy
                        </ResourceMenuItem>
                        <ResourceMenuItem>
                            Cookies Setting
                        </ResourceMenuItem>
                        <ResourceMenuItem>
                            Guidelines
                        </ResourceMenuItem>
                        <ResourceMenuItem>
                            Acknowledgement
                        </ResourceMenuItem>
                        <ResourceMenuItem>
                            Licenses
                        </ResourceMenuItem>
                        <ResourceMenuItem>
                            Moderation
                        </ResourceMenuItem>
                    </ResourceList>
               </Resources>
              
           </FooterSection>
       </Container>
    )
}

export default Footer
