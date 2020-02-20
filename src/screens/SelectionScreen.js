import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Picker, TouchableOpacity } from 'react-native';
const data = [
    {
        "category": "Auditing & Accounting",
        "services": [
            "Legal & Statutory Audits",
            "Assurance",
            "Special Purpose Audits",
            "Internal Audit",
            "IFRS",
            "US GAAP",
            "Forensic Accounting, Due Diligence Audit& Legal Support",
            "Regulatory & Compliance Services",
            "Preparing Accounts & Management Information Systems",
            "Payroll Administration",
            "Management Audit",
            "External Audit",
            "XBRL",
            "Others"

        ]
    },
    {
        "category": "Tax",
        "services": [
            "International & Local Corporate Tax",
            "Personal Tax Consulting & Planning",
            "VAT & Indirect Taxes",
            "Transfer Pricing",
            "Expat Tax Services",
            "Tax Disputes",
            "Taxation Compliance and Consulting",
            "XBRL",
            "Others"


        ]
    },
    {
        "category": "Legal  Services",
        "services": [
            "Corporate",
            "Agribusiness",
            "Antitrust, Competition and Trade",
            "Bank Finance and Regulation",
            "Business Crimes, Fraud and Compliance",
            "Capital Markets and Regulations",
            "Company Law",
            "Construction and Infrastructure",
            "Corporate Governance",
            "Corporate Organizations and Securities",
            "Cross Border Transactions",
            "E-commerce and Technology",
            "Employee Benefits and Pensions",
            "Energy and Natural Resources",
            "General Corporate",
            "Health Care Industries",
            "Immigration",
            "Insolvency, Bankruptcy and Restructuring",
            "Insurance and Reinsurance",
            "Intellectual Property",
            "Joint Ventures",
            "Labour and Employment",
            "Life Sciences",
            "Media, Entertainment and Sports",
            "Mergers and Acquisitions",
            "Private Equity",
            "Product Liability",
            "Project Finance",
            "Real Estate & Property Purchase",
            "Tax",
            "Telecommunications"
        ]

    },
    {
        "category": "Private",
        "services": [
            "Art and Antiques",
            "Business Crimes, Fraud and Compliance",
            "Charitable and Non Profit Organizations",
            "Cross Border Transactions",
            "Employee Benefits and Pensions",
            "Estate Planning and Administration",
            "Family Law",
            "Family Office Services",
            "Immigration, Residence and Nationality",
            "Labour and Employment",
            "Pre- and Postnuptial Agreements",
            "Private Equity",
            "Private Investment Companies and Funds",
            "Real Estate & Property Purchase",
            "Structuring of Wealth Management",
            "Tax Planning and Litigation",
            "Trusts and Estate Litigation",
            "Wills and Testaments"

        ]
    },
    {
        "category": "Litigation & Dispute Resolution",
        "services": [
            "Alternative Dispute Resolution",
            "Arbitration",
            "Commercial Litigation",
            "International Dispute Resolution",
            "Mediation",
            "Supreme Courts and Appellate"
        ]
    },
    {
        "category": "Administrative & Government Affairs",
        "services": [
            "Agribusiness and Subsidies",
            "Antitrust, Competition and Trade",
            "Bank Finance and Regulation",
            "Capital Markets and Regulations",
            "Construction and Infrastructure",
            "E Commerce and Technology",
            "Energy and Natural Resources",
            "Environmental",
            "Government Affairs and Private Procurement",
            "Health Care Industries",
            "Insurance and Reinsurance",
            "Life Sciences",
            "Telecommunications"
        ]
    },
    {
        "category": "Advisory",
        "services": [
            "Business Consulting Services",
            "Business Management Systems",
            "Business Strategy",
            "Succession Planning",
            "IT Consulting and Business Solutions",
            "Corporate Restructuring & Insolvency",
            "Feasibility Studies",
            "Risk Management Services",
            "Logistics",
            "Feasibility Studies",
            "HR Related Services",
            "XBRL"
        ]
    },
    {
        "category": "Corporate Finance",
        "services": [
            "Mergers & Acquisitions",
            "Business Valuations",
            "Financial Due Diligence",
            "Transaction Services",
            "Private Equity",
            "Early Stage & Alternative Finance",
            "IPO Consulting"
        ]
    },
    {
        "category":"Fiduciary & Estate Planning",
        "services": [
            "Family Office Services",
            "Wealth Management",
            "Establishing & Administrating Trusts",
            "Financial Planning",
            "Philanthropy Consulting",
            "Other (please specify)"
        ]
    }
]



const SelectionScreen = ({ navigation }) => {
    const searchUser = () => {
        navigation.navigate('Landing')
    }

    const showService = (value) => {
        setService(value)
    }

    const showCategory = (value) => {
        setCategory(value)
        let tempServiceList = [];

        data.map((x)=>{
            if (value==x.category){
                tempServiceList = [...x.services]
            }
        })
        setServiceList(tempServiceList)

    }

    const [service, setService] = useState('');
    const [category, setCategory] = useState('Tax');
    const [serviceList,setServiceList] =  useState(data.find(x => x.category === category).services)
   

    const categoryList = () => {
        return (data.map((x, i) => {            
            return (<Picker.Item label={x.category} key={i} value={x.category} />)
         }));
    }

    return (
        <View>
            <Image style={styles.imageStyle} source={require('../../assets/twitch.jpg')} />
            <View style={{ marginTop: 10 }}>
                <View style={styles.pickerContainers}>
                    <Picker
                        selectedValue={category}
                        onValueChange={showCategory.bind()}
                        style={styles.pickerStyle}
                        mode="dropdown"
                    >
                       {categoryList()}
                    </Picker>
                </View>
                <View style={styles.pickerContainers}>
                    <Picker
                        selectedValue={service}
                        onValueChange={showService.bind()}
                        style={styles.pickerStyle}
                        mode="dropdown"
                    >

                        
                        
                        {
                      
                        serviceList.map((x)=>{
                            return <Picker.Item value={x} key={x} label={x} />
                        })
                        
                        }
                     
                    </Picker>
                </View>

            </View>
            <TouchableOpacity
                style={styles.TouchableOpacityStyle}
                onPress={() => searchUser()}
            >
                <Text style={styles.registerStyle}>REGISTER</Text>
            </TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 200,
        width: "100%"
    },
    pickerContainers: {
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: "center",
        width: "80%",
        alignSelf: "center",
        marginVertical: 3,
        borderColor: 'grey',
        height: 35,
        borderRadius: 8

    },
    pickerStyle: {
        color: '#274962'
    },
    registerStyle: {
        alignSelf: "center",
        color: 'white',
        fontSize: 14
    },
    TouchableOpacityStyle: {
        marginTop: 20,
        backgroundColor: '#274962',
        flexDirection: "row",
        height: 35,
        borderRadius: 30,
        width: 180,
        color: 'black',
        justifyContent: "center",
        alignSelf: "center"
    }
});

export default SelectionScreen;