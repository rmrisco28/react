import { Alert, Button, Table } from "react-bootstrap";

function App16() {
  return (
    <>
      <Button></Button>
      <button className="btn btn-primary">저장</button>
      <Button>등록</Button>
      <Button variant="warning">워닝</Button>
      <Button variant="danger">위험</Button>
      <Button>버튼</Button>
      {/* 연습 다양한 variant props 값으로 버튼들 만들어보기*/}+
      <Button variant=" btn btn-outline-danger btn-lg">라이트</Button>
      <Button variant="link" size="lg">
        링크
      </Button>
      <Button variant="sm">SM</Button>
      <Button variant="lg">lg</Button>
      <hr />
      <hr />
      <Alert variant="danger">위험 경고</Alert>
      <Alert variant="info">정보 알림</Alert>
      {/* 연습: Alert 만들어보기,      */}
      <hr /> <Alert variant="danger">위험 경고</Alert>
      <Alert variant="info">정보 알림</Alert>
      <Alert variant="warning">정보 알림</Alert>
      <Alert variant="success">정보 알림</Alert>
      {/*  연습 : Alert 만들어보기*/}
      <hr />
      {/*  연습 : Table component 사용해서 아래와 같은 table 만들어보기  */}
      {/*table.table.table-striped.table-bordered.table-hover>thead>tr>th*3>lorem1^^^tbody>tr*3>td*3>lorem1*/}
      <Table striped={true} bordered={true} hover={true}>
        <thead>
          <tr>
            <th>Lorem.</th>
            <th>Modi.</th>
            <th>Hic?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lorem.</td>
            <td>Fugit.</td>
            <td>Iste?</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Omnis!</td>
            <td>Labore!</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Nemo!</td>
            <td>Natus?</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Lorem.</td>
            <td>Nemo!</td>
            <td>Ut.</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Nam!</td>
            <td>Iste.</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Iste.</td>
            <td>Officiis?</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Lorem.</td>
            <td>Provident.</td>
            <td>At?</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Nulla.</td>
            <td>Inventore?</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Vero.</td>
            <td>Quisquam.</td>
          </tr>
        </tbody>
      </Table>
      <hr />
      <hr />
      <hr />
      <hr />
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>Lorem.</th>
            <th>Doloribus!</th>
            <th>Nostrum?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lorem.</td>
            <td>Quos.</td>
            <td>Eligendi.</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Molestias.</td>
            <td>Sequi.</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Commodi!</td>
            <td>Officiis.</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Lorem.</td>
            <td>Autem!</td>
            <td>Sequi.</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Delectus?</td>
            <td>Ipsum!</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Vero.</td>
            <td>Non!</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Lorem.</td>
            <td>Aliquam!</td>
            <td>Accusamus?</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Laudantium!</td>
            <td>Perferendis.</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Doloribus?</td>
            <td>Culpa?</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App16;
