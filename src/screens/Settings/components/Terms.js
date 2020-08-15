/* eslint-disable prettier/prettier */
import React, { PureComponent } from "react";
import { StyleSheet } from "react-native";
import { View, Container, Content, List, ListItem, Header, Left, Text, Body, Right, Accordion } from "native-base";
import Icon from "react-native-vector-icons/Feather";


class Terms extends PureComponent {
    render(){
        return(
            <Container style={{backgroundColor: "#DDA15E"}}>
            <Header style={styles.header}>
                <Left><Icon name="arrow-left" style={styles.icon} onPress={() => {this.props.navigation.goBack()}}/></Left>
            </Header>
            <Content>
                <Text style={styles.title}>END USER LICENSE AGREEMENT</Text>
                <Text style={{...styles.text, marginBottom: 20, fontWeight: "bold"}}>Last updated August 05, 2020</Text>
                <Text style={styles.text}>Additify is licensed to You (End-User) by Michelle Tanoto (hereinafter: Licensor), for use only under the terms of this License Agreement.</Text>
                <Text style={styles.text}>By downloading the Application from the Apple AppStore, and any update thereto (as permitted by this License Agreement), You indicate that You agree to be bound by all of the terms and conditions of this License Agreement, and that You accept this License Agreement.</Text>
                <Text style={styles.text}>The parties of this License Agreement acknowledge that Apple is not a Party to this License Agreement and is not bound by any provisions or obligations with regard to the Application, such as warranty, liability, maintenance and support thereof. Michelle Tanoto, not Apple, is solely responsible for the licensed Application and the content thereof.</Text>
                <Text style={styles.text}>All rights not expressly granted to You are reserved.</Text>
            
                <Text style={styles.subsubtitle}>1. THE APPLICATION</Text>
                <Text style={styles.text}>Additify (hereinafter: Application) is a piece of software created to Educate people on food additives that goes in their body. - and customized for Apple mobile devices. It is used to Scan a product ingredients via camera and check if it is safe or not.</Text>
                <Text style={styles.text}>Furthermore, it is used to Help people to stay healthy by educating them on which food additives are considered safe, warning and hazardous.</Text>
                <Text style={styles.text}>The Application is not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use this Application. You may not use the Application in a way that would violate the Gramm-Leach-Bliley Act (GLBA).</Text>

                <Text style={styles.subsubtitle}>2. SCOPE OF LICENSE</Text>
                <Text style={styles.text}>2.1  This license will also govern any updates of the Application provided by Licensor that replace, repair, and/or supplement the first Application, unless a separate license is provided for such update in which case the terms of that new license will govern.</Text>
                <Text style={styles.text}>2.2  You may not share or make the Application available to third parties (unless to the degree allowed by the Apple Terms and Conditions, and with Michelle Tanoto's prior written consent), sell, rent, lend, lease or otherwise redistribute the Application.</Text>
                <Text style={styles.text}>2.3  You may not reverse engineer, translate, disassemble, integrate, decompile, integrate, remove, modify, combine, create derivative works or updates of, adapt, or attempt to derive the source code of the Application, or any part thereof (except with Michelle Tanoto's prior written consent).</Text>
                <Text style={styles.text}>2.4  You may not copy (excluding when expressly authorized by this license and the Usage Rules) or alter the Application or portions thereof. You may create and store copies only on devices that You own or control for backup keeping under the terms of this license, the App Store Terms of Service, and any other terms and conditions that apply to the device or software used. You may not remove any intellectual property notices. You acknowledge that no unauthorized third parties may gain access to these copies at any time.</Text>
                <Text style={styles.text}>2.5  Violations of the obligations mentioned above, as well as the attempt of such infringement, may be subject to prosecution and damages.</Text>
                <Text style={styles.text}>2.6  Licensor reserves the right to modify the terms and conditions of licensing.</Text>
                <Text style={styles.text}>2.7  Nothing in this license should be interpreted to restrict third-party terms. When using the Application, You must ensure that You comply with applicable third-party terms and conditions.</Text>

                <Text style={styles.subsubtitle}>3. TECHNICAL REQUIREMENTS</Text>
                <Text style={styles.text}>3.1  Licensor attempts to keep the Application updated so that it complies with modified/new versions of the firmware and new hardware. You are not granted rights to claim such an update.</Text>
                <Text style={styles.text}>3.2  You acknowledge that it is Your responsibility to confirm and determine that the app end-user device on which You intend to use the Application satisfies the technical  specifications mentioned above.</Text>
                <Text style={styles.text}>3.3  Licensor reserves the right to modify the technical specifications as it sees appropriate at any time.</Text>

                <Text style={styles.subsubtitle}>4. NO MAINTENANCE OR SUPPORT</Text>
                <Text style={styles.text}>4.1  Michelle Tanoto is not obligated, expressed or implied, to provide any maintenance, technical or other support for the Application.</Text>
                <Text style={styles.text}>4.2  Michelle Tanoto and the End-User acknowledge that Apple has no obligation whatsoever to furnish any maintenance and support services with respect to the licensed Application.</Text>

                <Text style={styles.subsubtitle}>5. LIABILITY</Text>
                <Text style={styles.text}>5.1  Licensor's responsibility in the case of violation of obligations and tort shall be limited to intent and gross negligence. Only in case of a breach of essential contractual duties (cardinal obligations), Licensor shall also be liable in case of slight negligence. In any case, liability shall be limited to the foreseeable, contractually typical damages. The limitation mentioned above does not apply to injuries to life, limb, or health.</Text>
                <Text style={styles.text}>5.2  Licensor takes no accountability or responsibility for any damages caused due to a breach of duties according to Section 2 of this Agreement. To avoid data loss, You are required to make use of backup functions of the Application to the extent allowed by applicable third-party terms and conditions of use. You are aware that in case of alterations or manipulations of the Application, You will not have access to licensed Application.</Text>

                <Text style={styles.subsubtitle}>6. WARRANTY</Text>
                <Text style={styles.text}>6.1  Licensor warrants that the Application is free of spyware, trojan horses, viruses, or any other malware at the time of Your download. Licensor warrants that the Application works as described in the user documentation.</Text>
                <Text style={styles.text}>6.2  No warranty is provided for the Application that is not executable on the device, that has been unauthorizedly modified, handled inappropriately or culpably, combined or installed with inappropriate hardware or software, used with inappropriate accessories, regardless if by Yourself or by third parties, or if there are any other reasons outside of Michelle Tanoto's sphere of influence that affect the executability of the Application.</Text>
                <Text style={styles.text}>6.3  You are required to inspect the Application immediately after installing it and notify Michelle Tanoto about issues discovered without delay by e-mail provided in Product Claims. The defect report will be taken into consideration and further investigated if it has been mailed within a period of thirty (30) days after discovery.</Text>
                <Text style={styles.text}>6.4  If we confirm that the Application is defective, Michelle Tanoto reserves a choice to remedy the situation either by means of solving the defect or substitute delivery.</Text>
                <Text style={styles.text}>6.5  In the event of any failure of the Application to conform to any applicable warranty, You may notify the App-Store-Operator, and Your Application purchase price will be refunded to You. To the maximum extent permitted by applicable law, the App-Store-Operator will have no other warranty obligation whatsoever with respect to the App, and any other losses, claims, damages, liabilities, expenses and costs attributable to any negligence to adhere to any warranty.</Text>
                <Text style={styles.text}>6.6  If the user is an entrepreneur, any claim based on faults expires after a statutory period of limitation amounting to twelve (12) months after the Application was made available to the user. The statutory periods of limitation given by law apply for users who are consumers.</Text>

                <Text style={styles.subsubtitle}>7. PRODUCT CLAIMS</Text>
                <Text style={styles.text}>Michelle Tanoto and the End-User acknowledge that Michelle Tanoto, and not Apple, is responsible for addressing any claims of the End-User or any third party relating to the licensed Application or the End-User’s possession and/or use of that licensed Application, including, but not limited to:</Text>
                <Text style={styles.bullets}>(i) product liability claims;</Text>
                <Text style={styles.bullets}>(ii) any claim that the licensed Application fails to conform to any applicable legal or regulatory requirement; and</Text>
                <Text style={styles.bullets}>(iii) claims arising under consumer protection, privacy, or similar legislation, including in connection with Your Licensed Application’s use of the HealthKit and HomeKit.</Text>

                <Text style={styles.subsubtitle}>8. LEGAL COMPLIANCE</Text>
                <Text style={styles.text}>You represent and warrant that You are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a "terrorist supporting" country; and that You are not listed on any U.S. Government list of prohibited or restricted parties.</Text>

                <Text style={styles.subsubtitle}>9. CONTACT INFORMATION</Text>
                <Text style={styles.text}>For general inquiries, complaints, questions or claims concerning the licensed Application, please contact michelletanotoo@gmail.com.</Text>

                <Text style={styles.subsubtitle}>10. TERMINATION</Text>
                <Text style={styles.text}>The license is valid until terminated by Michelle Tanoto or by You. Your rights under this license will terminate automatically and without notice from Michelle Tanoto if You fail to adhere to any term(s) of this license. Upon License termination, You shall stop all use of the Application, and destroy all copies, full or partial, of the Application.</Text>

                <Text style={styles.subsubtitle}>11. THIRD-PARTY TERMS OF AGREEMENTS AND BENEFICIARY</Text>
                <Text style={styles.text}>Michelle Tanoto represents and warrants that Michelle Tanoto will comply with applicable third-party terms of agreement when using licensed Application.</Text>
                <Text style={styles.text}>In Accordance with Section 9 of the "Instructions for Minimum Terms of Developer's End-User License Agreement," Apple and Apple's subsidiaries shall be third-party beneficiaries of this End User License Agreement and - upon Your acceptance of the terms and conditions of this license agreement, Apple will have the right (and will be deemed to have accepted the right) to enforce this End User License Agreement against You as a third-party beneficiary thereof.</Text>

                <Text style={styles.subsubtitle}>12. INTELLECTUAL PROPERTY RIGHTS</Text>
                <Text style={styles.text}>Michelle Tanoto and the End-User acknowledge that, in the event of any third-party claim that the licensed Application or the End-User's possession and use of that licensed Application infringes on the third party's intellectual property rights, Michelle Tanoto, and not Apple, will be solely responsible for the investigation, defense, settlement and discharge or any such intellectual property infringement claims.</Text>
                
                <Text style={styles.subsubtitle}>13. APPLICABLE LAW</Text>
                <Text style={styles.text}>This license agreement is governed by the laws of Australia excluding its conflicts of law rules.</Text>

                <Text style={styles.subsubtitle}>14. MISCELLANEOUS</Text>
                <Text style={styles.text}>14.1  If any of the terms of this agreement should be or become invalid, the validity of the remaining provisions shall not be affected. Invalid terms will be replaced by valid ones formulated in a way that will achieve the primary purpose.</Text>
                <Text style={styles.text}>14.2  Collateral agreements, changes and amendments are only valid if laid down in writing. The preceding clause can only be waived in writing.</Text>
            </Content>
           </Container>
        )
    }

}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#DDA15E",
        borderBottomWidth: 0
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 20,
        marginLeft: 25
    },
    subtitle: {
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 20,
        marginLeft: 25,
        marginRight: 25,
    },
    subsubtitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
        marginLeft: 25,
        marginRight: 25,
    },
    bullets: {
        marginLeft: 40,
        marginTop: 5,
        marginRight: 25,
        textAlign: "justify",
        marginBottom: 10,
    },
    text: {
        marginLeft: 25,
        marginTop: 5,
        marginRight: 25,
        textAlign: "justify",
        marginBottom: 10,
    },
    subtext:{
        marginLeft: 25,
        marginTop: 5,
        marginRight: 25,
        textAlign: "justify",
        fontWeight: "bold"
    },
    icon:{
      fontSize: 30,
      marginLeft: 15,
      // marginTop: 10
    }
})

export default Terms;

