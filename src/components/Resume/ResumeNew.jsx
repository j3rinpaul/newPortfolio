
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/../Assets/resume.pdf";
import datapdf from "../../Assets/../Assets/jerinpaul.pdf"
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {

  return (
    <div>
      <Container fluid className="resume-section" >
     
        <Row style={{ justifyContent: "center", position: "relative",paddingBottom: "40%",paddingTop:"20%" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            className="resume-btn"
            style={{ maxWidth: "250px"}}
          >
            <AiOutlineDownload />
            &nbsp;Resume
          </Button>
          
          <Button
            variant="primary"
            href={datapdf}
            target="_blank"
            className="resume-btn"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp; Data Scientist Resume
          </Button>
        </Row>

      </Container>
    </div>
  );
}

export default ResumeNew;
