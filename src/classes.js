"use strict";

module.exports = {
  CLASS_DECLARATION: "apex.jorje.data.ast.ClassDecl",
  LOCATION_IDENTIFIER: "apex.jorje.data.Identifiers$LocationIdentifier",
  PARSER_OUTPUT: "apex.jorje.semantic.compiler.parser.ParserOutput",
  CLASS_TYPE_REF: "apex.jorje.data.ast.TypeRefs$ClassTypeRef",
  ARRAY_TYPE_REF: "apex.jorje.data.ast.TypeRefs$ArrayTypeRef",
  INNER_CLASS_MEMBER: "apex.jorje.data.ast.BlockMember$InnerClassMember",
  PUBLIC_MODIFIER: "apex.jorje.data.ast.Modifier$PublicModifier",
  PRIVATE_MODIFIER: "apex.jorje.data.ast.Modifier$PrivateModifier",
  VIRTUAL_MODIFIER: "apex.jorje.data.ast.Modifier$VirtualModifier",
  HIDDEN_MODIFIER: "apex.jorje.data.ast.Modifier$HiddenModifier",
  PROTECTED_MODIFIER: "apex.jorje.data.ast.Modifier$ProtectedModifier",
  ABSTRACT_MODIFIER: "apex.jorje.data.ast.Modifier$AbstractModifier",
  STATIC_MODIFIER: "apex.jorje.data.ast.Modifier$StaticModifier",
  TEST_METHOD_MODIFIER: "apex.jorje.data.ast.Modifier$TestMethodModifier",
  WEB_SERVICE_MODIFIER: "apex.jorje.data.ast.Modifier$WebServiceModifier",
  FINAL_MODIFIER: "apex.jorje.data.ast.Modifier$FinalModifier",
  TRANSIENT_MODIFIER: "apex.jorje.data.ast.Modifier$TransientModifier",
  GLOBAL_MODIFIER: "apex.jorje.data.ast.Modifier$GlobalModifier",
  WITHOUT_SHARING_MODIFIER: "apex.jorje.data.ast.Modifier$WithoutSharingModifier",
  WITH_SHARING_MODIFIER: "apex.jorje.data.ast.Modifier$WithSharingModifier",
  ANNOTATION: "apex.jorje.data.ast.Modifier$Annotation",
  ANNOTATION_KEY_VALUE: "apex.jorje.data.ast.AnnotationParameter$AnnotationKeyValue",
  ANNOTATION_TRUE_VALUE: "apex.jorje.data.ast.AnnotationValue$TrueAnnotationValue",
  ANNOTATION_FALSE_VALUE: "apex.jorje.data.ast.AnnotationValue$FalseAnnotationValue",
  METHOD_MEMBER: "apex.jorje.data.ast.BlockMember$MethodMember",
  METHOD_DECLARATION: "apex.jorje.data.ast.MethodDecl",
  EMPTY_MODIFIER_PARAMETER_REF: "apex.jorje.data.ast.ParameterRefs$EmptyModifierParameterRef",
  BLOCK_STATEMENT: "apex.jorje.data.ast.Stmnt$BlockStmnt",
  RETURN_STATEMENT: "apex.jorje.data.ast.Stmnt$ReturnStmnt",
  VARIABLE_DECLARATION_STATEMENT: "apex.jorje.data.ast.Stmnt$VariableDeclStmnt",
  VARIABLE_DECLARATIONS: "apex.jorje.data.ast.VariableDecls",
  VARIABLE_DECLARATION: "apex.jorje.data.ast.VariableDecl",
  NEW_EXPRESSION: "apex.jorje.data.ast.Expr$NewExpr",
  NEW_LIST_INIT: "apex.jorje.data.ast.NewObject$NewListInit",
  NEW_LIST_LITERAL: "apex.jorje.data.ast.NewObject$NewListLiteral",
  NEW_MAP_INIT: "apex.jorje.data.ast.NewObject$NewMapInit",
  NEW_STANDARD: "apex.jorje.data.ast.NewObject$NewStandard",
  METHOD_CALL_EXPRESSION: "apex.jorje.data.ast.Expr$MethodCallExpr",
  BINARY_EXPRESSION: "apex.jorje.data.ast.Expr$BinaryExpr",
  LITERAL_EXPRESSION: "apex.jorje.data.ast.Expr$LiteralExpr",
  BINARY_OPERATION: "apex.jorje.data.ast.BinaryOp",
  ASSIGNMENT_OPERATION: "apex.jorje.data.ast.AssignmentOp",
  VARIABLE_EXPRESSION: "apex.jorje.data.ast.Expr$VariableExpr",
  THIS_VARIABLE_EXPRESSION: "apex.jorje.data.ast.Expr$ThisVariableExpr",
  BOOLEAN_EXPRESSION: "apex.jorje.data.ast.Expr$BooleanExpr",
  BOOLEAN_OPERATION: "apex.jorje.data.ast.BooleanOp",
  NESTED_EXPRESSION: "apex.jorje.data.ast.Expr$NestedExpr",
  IF_ELSE_BLOCK: "apex.jorje.data.ast.Stmnt$IfElseBlock",
  IF_BLOCK: "apex.jorje.data.ast.IfBlock",
  ELSE_BLOCK: "apex.jorje.data.ast.ElseBlock",
  TERNARY_EXPRESSION: "apex.jorje.data.ast.Expr$TernaryExpr",
  EXPRESSION_STATEMENT: "apex.jorje.data.ast.Stmnt$ExpressionStmnt",
  ASSIGNMENT_EXPRESSION: "apex.jorje.data.ast.Expr$AssignmentExpr",

  // SOQL
  SOQL_EXPRESSION: "apex.jorje.data.ast.Expr$SoqlExpr",
  QUERY: "apex.jorje.data.soql.Query",
  SELECT_COLUMN_CLAUSE: "apex.jorje.data.soql.SelectClause$SelectColumnClause",
  SELECT_COLUMN_EXPRESSION: "apex.jorje.data.soql.SelectExpr$SelectColumnExpr",
  FIELD: "apex.jorje.data.soql.Field",
  FIELD_IDENTIFIER: "apex.jorje.data.soql.FieldIdentifier",
  FROM_CLAUSE: "apex.jorje.data.soql.FromClause",
  FROM_EXPRESSION: "apex.jorje.data.soql.FromExpr",
  WHERE_CLAUSE: "apex.jorje.data.soql.WhereClause",
  WHERE_OPERATION_EXPRESSION: "apex.jorje.data.soql.WhereExpr$WhereOpExpr",
  WHERE_OPERATION_EXPRESSIONS: "apex.jorje.data.soql.WhereExpr$WhereOpExprs",
  APEX_EXPRESSION: "apex.jorje.data.soql.QueryExpr$ApexExpr",
  COLON_EXPRESSION: "apex.jorje.data.soql.ColonExpr",
  ORDER_BY_CLAUSE: "apex.jorje.data.soql.OrderByClause",
  ORDER_BY_VALUE: "apex.jorje.data.soql.OrderByExpr$OrderByValue",
  LIMIT_VALUE: "apex.jorje.data.soql.LimitClause$LimitValue",
  OFFSET_VALUE: "apex.jorje.data.soql.OffsetClause$OffsetValue",
  WHERE_COMPOUND_EXPRESSION: "apex.jorje.data.soql.WhereExpr$WhereCompoundExpr",
  WHERE_UNARY_EXPRESSION: "apex.jorje.data.soql.WhereExpr$WhereUnaryExpr",
  WHERE_UNARY_OPERATOR: "apex.jorje.data.soql.WhereUnaryOp",
  QUERY_LITERAL_EXPRESSION: "apex.jorje.data.soql.QueryExpr$LiteralExpr",
  QUERY_LITERAL: "apex.jorje.data.soql.QueryLiteral",
};
